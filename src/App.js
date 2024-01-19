import './App.css';
import React from 'react';
import HelloWorld from './components/HelloWorld';
import CounterApp from './components/CounterApp';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HelloWorld name={"Shivam!!"}/>
          <CounterApp/>
          <Form/>
      </header>
    </div>
  );
}

export default App;
