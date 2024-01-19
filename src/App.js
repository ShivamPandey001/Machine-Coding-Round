import './App.css';
import React from 'react';
import HelloWorld from './HelloWorld';
import CounterApp from './CounterApp';

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
