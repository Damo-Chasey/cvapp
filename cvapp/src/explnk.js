import React from 'react';

class ReactLink extends React.Component{
    constructor(props){
      super(props);
      this.state = {apiResponse: ""};
    }
  
    callAPI(){
      fetch("http://localhost:3001/")
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))
    }
    
    
    componentWillMount() {
      this.callAPI();
    }
    
    render(){
      return(
        <div>
          <p className="express-link">{this.state.apiResponse}</p>
        </div>
      );
    }
  }

  export default ReactLink;