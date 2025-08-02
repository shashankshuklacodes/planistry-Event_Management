import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // ✅ import AuthProvider
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <BrowserRouter>
      <AuthProvider> {/* ✅ wrap App inside AuthProvider */}
        <App />
      </AuthProvider>
      </BrowserRouter>
    
  </React.StrictMode>
);
