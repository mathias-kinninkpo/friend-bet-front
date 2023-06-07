import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Sidebar from './components/sidebar';
import './App.css';
import 'bootstrap/dist/js/bootstrap'

function App() {




  return (
    <div className="App">
        <Header />
        <div className='container-app'>
          <Sidebar />
          <Main />
        </div>
    </div>
  );
}

export default App;
