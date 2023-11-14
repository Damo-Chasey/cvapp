//import React from 'react';
import {ShowData} from './showdata.js';
import React from 'react';
import BarChart from './barchart.js'

class DBWindow extends React.Component{
    constructor (props) {
        super (props)
        this.state = {
            value: ``,
            message: ``,
            listMounted: true,
        };

        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleMessageChange(event){
        this.setState({message: event.target.value});
    }

    async handleSubmit(event){
        console.log(this.state.value);
        console.log(this.state.message);
        event.preventDefault();

        this.setState({listMounted: false}); //Forces component to re-render

        let request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({name: this.state.value,colour: this.state.message})
        };
        let res = await fetch('https://desolate-eyrie-13469-959621a3e284.herokuapp.com/add_user', request)


        let resJson = await res.json();
        console.log(resJson);

        this.setState({listMounted: true}); //Other half of Re-Render
    }

    render() {
        return(
            <div>
                <div className="windowsContent">
                    <div>
                        <h2>Colour database</h2>
                        <p>Leave an alias and your favourite colour! or just write something silly</p>
                        <p>This database fetches data through an express api and into a mongo database</p>
                    </div>

                    <div className="dataInput">
                        <form onSubmit={this.handleSubmit}>
                            <table>
                                <tbody>
                                    <td></td>
                                    <td width={"200px"}>  
                                        <tr>
                                            <td>
                                                <label>
                                                    Alias:
                                                </label>
                                            </td>
                                            <td>
                                                <input type="text" value={this.state.value} onChange={this.handleChange} name="Alias"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>
                                                Colour:
                                                </label>
                                            </td>
                                            <td>
                                                <input type="text" value={this.state.message} onChange={this.handleMessageChange} name="Message"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <input type="submit" name="Submit"/>
                                            </td>
                                        </tr>
                                    </td><td>

                                    </td>
                                </tbody>
                            </table>
                        </form>
                    </div>
                    {this.state.listMounted === true ? <ShowData/> : null}
                </div>
                <td></td>
                <td style={{width:"500px"}}>
                    <BarChart/>
                </td>
                <td></td>
            </div>
        )
    };
}

export default DBWindow;