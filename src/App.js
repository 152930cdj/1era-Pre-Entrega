// App.js
import React from 'react';
import Navbar from './components/ItemListContainer/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import List from './components/ItemListContainer/List/List';

function App() {
  return ( <>
    <div className="App">
      <ItemListContainer greeting="¡Bienvenido a nuestra plataforma!" />
      <Navbar />
      <List/>
    </div>
    </>);
}

export default App;

