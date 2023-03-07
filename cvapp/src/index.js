import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactLink from './explnk.js';
import Dropdown from './dropdown.js';
import Navbar from './navbar.js';

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
        <Dropdown/>
        <ReactLink/>
        
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);