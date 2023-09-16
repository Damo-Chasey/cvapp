import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactLink from './explnk.js';
import Dropdown from './dropdown.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class App extends React.Component{
  

  render(){
    return(
      <header className='App-header'>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        
        <div>
        
        <Dropdown element={this.linkUp()}/>
        
        </div>
      </header>
    );
  }

  linkUp(){
    return(<ReactLink/>)
  }
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);