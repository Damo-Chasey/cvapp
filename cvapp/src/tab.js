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
            <div>
                <ul className="nav-bar">
                    <li>{this.renderTab(0)}</li>
                    <li>{this.renderTab(1)}</li>
                    <li>{this.renderTab(2)}</li>
                </ul>
                {this.renderWindow(0)}
                {this.renderWindow(1)}
                {this.renderWindow(2)}
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
            newArray[0][i] = {name: newArray[0][i].name, isOpen: this.boolFlip(newArray[0][i].isOpen)};
            
            console.log(newArray);
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
            <div>This is a test element!</div>
        );
    }

    window1(){
        return(
            <div>Second test element</div>
        );
    }

    window2(){
        return(
            <div>Third one</div>
        );
    }
}




/*
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

export default Tabs;