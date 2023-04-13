import React from 'react';

class Window1 extends React.Component{
    constructor (props) {
        super (props)
        this.state = {
            value: ``,
            message: ``,
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

    handleSubmit(event){
        console.log(this.state.value);
        console.log(this.state.message);
        event.preventDefault();
    }

    render() {
        return(
            <div className="windowsContent">
                <div>
                    <h2>Quote database</h2>
                    <p>Here you can leave a quote, if you like</p>
                </div>
                
                <div className="dataInput">
                    <form onSubmit={this.handleSubmit}>
                        <table>
                            <tbody>
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
                                    Message:
                            
                                    </label>
                                </td>
                                <td>
                                    <input type="text" value={this.state.message} onChange={this.handleMessageChange} name="Message"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" name="Submit"/>
                                </td> 
                            </tr>
                            </tbody>
                        </table>
                        
                    </form>
                </div>
                
            </div>
        )
    };
}

export default Window1;