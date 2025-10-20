// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AdminProvider } from './context/AdminContext';
import { DataProvider } from './context/DataContext';
import { ThemeProvider } from './context/ThemeContext'; // New
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AdminProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </AdminProvider>
    </ThemeProvider>
  </React.StrictMode>
);