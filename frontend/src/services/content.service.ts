// FILE: src/services/content.service.ts
// Content management service 
// ==============================================

import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  serverTimestamp,
  query,
  orderBy
} from 'firebase/firestore';
import { db } from './firebase';

export interface ContentSection {
  id: string;
  title: string;
  content?: string; // Make optional since we now have data field
  data?: any; // Add data field for structured content
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  order?: number;
  lastModified: any;
  modifiedBy: string;
}

export interface ChapterContent {
  id: string;
  title: string;
  icon?: string;        
  description?: string; 
  sections: Record<string, ContentSection>;
  published: boolean;
  lastModified: any;
}

class ContentService {
  private contentCollection = 'content';

  // Get all chapters
  async getAllChapters(): Promise<ChapterContent[]> {
    try {
      const q = query(collection(db, this.contentCollection), orderBy('id'));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        ...(doc.data() as ChapterContent),
        id: doc.id
      }));
    } catch (error) {
      console.error('Error fetching chapters:', error);
      throw new Error('Failed to fetch chapters');
    }
  }

  // Get specific chapter
  async getChapter(chapterId: string): Promise<ChapterContent | null> {
    try {
      const docRef = doc(db, this.contentCollection, chapterId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as ChapterContent;
      }
      return null;
    } catch (error) {
      console.error('Error fetching chapter:', error);
      throw new Error('Failed to fetch chapter');
    }
  }

  // Update section content (for simple HTML content)
  async updateSection(
    chapterId: string,
    sectionId: string,
    content: Partial<ContentSection>,
    adminEmail: string
  ): Promise<void> {
    try {
      const docRef = doc(db, this.contentCollection, chapterId);
      
      await updateDoc(docRef, {
        [`sections.${sectionId}.content`]: content.content,
        [`sections.${sectionId}.lastModified`]: serverTimestamp(),
        [`sections.${sectionId}.modifiedBy`]: adminEmail,
        lastModified: serverTimestamp()
      });
    } catch (error) {
      console.error('Error updating section:', error);
      throw new Error('Failed to update section');
    }
  }

  // Update section data (for structured content)
  async updateSectionData(
    chapterId: string,
    sectionId: string,
    data: any,
    adminEmail: string
  ): Promise<void> {
    try {
      const docRef = doc(db, this.contentCollection, chapterId);
      
      await updateDoc(docRef, {
        [`sections.${sectionId}.data`]: data,
        [`sections.${sectionId}.lastModified`]: serverTimestamp(),
        [`sections.${sectionId}.modifiedBy`]: adminEmail,
        lastModified: serverTimestamp()
      });
    } catch (error) {
      console.error('Error updating section data:', error);
      throw new Error('Failed to update section data');
    }
  }

  // Create or update entire chapter
  async saveChapter(chapterData: ChapterContent, adminEmail: string): Promise<void> {
    try {
      const docRef = doc(db, this.contentCollection, chapterData.id);
      
      await setDoc(docRef, {
        ...chapterData,
        lastModified: serverTimestamp(),
        modifiedBy: adminEmail
      }, { merge: true });
    } catch (error) {
      console.error('Error saving chapter:', error);
      throw new Error('Failed to save chapter');
    }
  }

  // Publish/unpublish chapter
  async togglePublish(chapterId: string, published: boolean): Promise<void> {
    try {
      const docRef = doc(db, this.contentCollection, chapterId);
      
      await updateDoc(docRef, {
        published,
        lastModified: serverTimestamp()
      });
    } catch (error) {
      console.error('Error toggling publish:', error);
      throw new Error('Failed to update publish status');
    }
  }
}

export const contentService = new ContentService();