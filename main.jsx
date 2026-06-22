import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage'; // Ensure this path matches where your HomePage file is saved
import './index.css'; // Make sure you have an index.css file, or remove this line if not

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
