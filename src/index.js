import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  ItemListContainer  from './components/ItemListContainer/ItemListContainer.jsx';
import  NavBar  from './components/ItemListContainer/NavBar/NavBar.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);