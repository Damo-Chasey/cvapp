import React from 'react';

function Tab(props) {
    return(
        <button onClick={props.onClick}>{props.name}</button>
    );
}

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = { tabs:[
            {name: "Home", isOpen: false},
            {name: "About", isOpen: false},
            {name: "info", isOpen: false},
        ]};
    }

    render(){
        return(
            <ul className="nav-bar">
                <li>{this.renderTab(1)}</li>
                <li>{this.renderTab(2)}</li>
                <li>{this.renderTab(3)}</li>
            </ul>
        );
    }

    renderTab(i){
        return(
            <Tab onClick={handleOpen(i)} name={this.props.tabs[i]}/>
        );
    }
}


function handleOpen(props){
    flipValue(props); 
    console.log("Item picked" + props.name);
}

function flipValue(props){
    props.isOpen === true ? props.isOpen = false : props.isOpen = true;
}

/*
function closeTabs(){
    this.state.tabs.array.forEach(element => {
        flipValue(element.isOpen);
    });
}
*/

export default Tabs;