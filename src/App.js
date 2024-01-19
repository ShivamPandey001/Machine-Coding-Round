import './App.css';
import React from 'react';
import HelloWorld from './components/HelloWorld';
import CounterApp from './components/CounterApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HelloWorld name={"Shivam!!"}/>
          <CounterApp/>
      </header>
    </div>
  );
}

export default App;
