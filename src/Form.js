import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    state = { userName : '' }
    handleSubmite = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
        this.props.onSubmite(resp.data)
        this.setState({userName:''})
    }
  
    render() { 
        return ( 
            <form onSubmit={this.handleSubmite}>
                <input type="text" value={this.state.userName} onChange={event => this.setState({userName : event.target.value})}
                placeholder="Github User Name"/>
                <button>Add Card</button>
            </form>
         );
    }
}
 
export default Form;