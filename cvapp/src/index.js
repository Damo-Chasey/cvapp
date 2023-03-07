import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactLink from './explnk.js';
import Game from './tiktak.js';
import Dropdown from './dropdown.js';

class App extends React.Component{
  
  

  render(){
    return(
      <div>
        <Dropdown/>
        <ReactLink/>
        <Game/>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);