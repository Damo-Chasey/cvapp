import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactLink from './explnk.js';
import Dropdown from './dropdown.js';

//import Planets from './planets.js';
/*
fetch("http://localhost:3001/placeholder")
  .then((res) => res.text())
  .then((data) => {
    const inputText = data;
  }
);
*/
class App extends React.Component{
  

  render(){
    return(
      <div style={{ backgroundImage: `url(${"backround1.png"})` }}>
        
        <Dropdown element={this.linkUp}/>
        
        
      </div>
    );
  }

  linkUp(){
    return(<ReactLink/>)
  }
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);