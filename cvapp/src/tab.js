import React from 'react';
import Window1 from './window1.js';

function Tab(props) {
    return(
        <button onClick={props.onClick}>{props.name}</button>
    );
}

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = { tabs:[
            {name: "Home", isOpen: true},
            {name: "Database", isOpen: false},
            {name: "Info", isOpen: false},
        ],
        open: props.isOpen,
        };
    }

    render(){
        return(
            <div>
                {this.props.isOpen ? (
                    <ul className="nav-bar">
                        <li>{this.renderTab(0)}</li>
                        <li>{this.renderTab(1)}</li>
                        <li>{this.renderTab(2)}</li>
                    </ul>
                ) : null}
                
                <div className="windows">
                    {this.renderWindow(0)}
                    {this.renderWindow(1)}
                    {this.renderWindow(2)}
                </div>
                
            </div>
            
        );
    }

    renderTab(i){
        return(
            <Tab onClick={() => this.handleOpen(i)} name={this.state.tabs[i].name}/>
        );
    }
    
    renderWindow(i){
        return(
            <div>
                {this.state.tabs[i].isOpen && i === 0 ? (
                    this.window0()
                ) : null}
                {this.state.tabs[i].isOpen && i === 1 ? (
                    this.window1()
                ) : null}
                {this.state.tabs[i].isOpen && i === 2 ? (
                    this.window2()
                ) : null}
            </div>
            
        );
    }

    handleOpen(i){
        this.flipValue(i); 
        console.log("Item picked " + this.state.tabs[i].name);
    }
    
    flipValue(i){
        this.setState(prevState => {
            const newArray = [prevState.tabs];
            for(let j = 0 ; j < 3 ; ++j){
                newArray[0][j] = {name: newArray[0][j].name, isOpen: false};
            }
            newArray[0][i] = {name: newArray[0][i].name, isOpen: this.boolFlip(newArray[0][i].isOpen)};
            return {array: newArray[0]};
        });
        this.render();
    }

    boolFlip(bool){
        let out = bool;
        out === true ? out = false : out = true;
        return out;
    }

    window0(){
        return(
            <div className="windowsContent">This is a test element!</div>
        );
    }

    window1(){
        return(
            <Window1/>
        );
    }

    window2(){
        return(
            <div className="windowsContent">This is the info page</div>
        );
    }
}

export default Tabs;

/*
    closeTabs(array, length){
        for(let i = 0 ; i < length ; ++i){
            array[0][i] = {name: array[0][i].name, isOpen: false};
        }
        console.log(array);
        return array;
    }

    flipValue(i){
        this.setState(prevState => {
            console.log(prevState.tabs);
            const newArray = [prevState.tabs];
            newArray[0][i] = {name: "Home", isOpen: true};
            
            console.log(newArray);
            return {array: newArray[0]};
        });

        this.render();
    }

    this.state.tabs[i].isOpen === true ? this.setState({tabs }) false : this.state.tabs[i].isOpen = true;

    <Tab onClick={handleOpen(this.props.tabs[i])} name={this.props.tabs[i]}/>
*/


/*
function closeTabs(){
    this.state.tabs.array.forEach(element => {
        flipValue(element.isOpen);
    });
}
*/