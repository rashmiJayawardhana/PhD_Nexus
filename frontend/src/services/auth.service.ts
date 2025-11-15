// FILE: src/services/auth.service.ts
// Authentication service
// ==========================================

import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  type User 
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

export interface AdminUser {
  uid: string;
  email: string;
  role: 'admin';
}

class AuthService {
  // Login admin user
  async loginAdmin(email: string, password: string): Promise<AdminUser> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Verify user is admin
      const adminDoc = await getDoc(doc(db, 'admins', user.uid));
      
      if (!adminDoc.exists() || adminDoc.data()?.role !== 'admin') {
        await signOut(auth);
        throw new Error('Unauthorized: Not an admin user');
      }
      
      return {
        uid: user.uid,
        email: user.email!,
        role: 'admin'
      };
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(error.message || 'Login failed');
    }
  }

  // Logout admin user
  async logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error: any) {
      console.error('Logout error:', error);
      throw new Error('Logout failed');
    }
  }

  // Check if user is admin
  async isAdmin(user: User): Promise<boolean> {
    try {
      const adminDoc = await getDoc(doc(db, 'admins', user.uid));
      return adminDoc.exists() && adminDoc.data()?.role === 'admin';
    } catch (error) {
      console.error('Admin check error:', error);
      return false;
    }
  }

  // Subscribe to auth state changes
  onAuthStateChanged(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
  }

  // Get current user
  getCurrentUser(): User | null {
    return auth.currentUser;
  }
}

export const authService = new AuthService();