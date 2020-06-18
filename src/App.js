import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar componente
import MiComponente from './components/MiComponente';

function holaMundo(name, edad) {
  var pres = (
    <div>
      <h2>Hola, soy... {name}</h2>
      <h3>Tengo {edad}</h3>
    </div>
  );
  return pres
}

function App() {

  var name = 'Elkin Rozo';
  console.log('Inicio app')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola bienvenido al curso
        </p>
        {
          holaMundo(name, 25)
        }

        <section className="componentes">
          {console.log('Antes de iniciar componente')}
          <MiComponente />
        </section>
      </header>
    </div>
  );
}

export default App;
