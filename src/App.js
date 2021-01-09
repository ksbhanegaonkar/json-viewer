import Flexbox from 'flexbox-react';
import React from 'react';
import './App.css';

class App extends React.Component {

  render(){
  return (
    <div className="App">
        <Flexbox>test</Flexbox>
        <Flexbox>test1</Flexbox>
        <Flexbox>test2</Flexbox>
    </div>
  );
  }
}

export default App;
