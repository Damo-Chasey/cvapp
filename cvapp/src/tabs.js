import React from 'react';

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
                {this.state.tabs.map((tabs , key) => {
                    return(
                        <li key={key} onClick={handleOpen(tabs)}>{tabs.name}</li>
                    );
                })}
            </ul>
        );
    }

    renderTab(i){
        return(
            <button onClick={() => this.props.onClick(i)}> {tabs.name}</button>    
        );
    }
}


const handleOpen = (props) => {
    flipValue(props); 
    console.log("Item picked" + props.name);
}

function flipValue(props){
    props.isOpen === true ? props.isOpen = false : props.isOpen = true;
}

function closeTabs(){
    this.state.tabs.array.forEach(element => {
        flipValue(element.isOpen);
    });
}

export default Tabs;