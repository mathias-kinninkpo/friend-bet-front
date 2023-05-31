import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Sidebar from './components/sidebar';
import './App.css';

function App() {




  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div>
          <Sidebar />
          <Main />
        </div>
      </header>
    </div>
  );
}

export default App;
