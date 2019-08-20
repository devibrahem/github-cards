import React, { Component } from 'react';
import CardList from "./Cardlist";
import './App.css';
import Form from './Form'
 
class App extends Component {
  state = { 
    testData : [],
   }
   addNewProfile = (profileData) => {
     this.setState(prevState => ({
       testData:[...prevState.testData,profileData]
     }))
   }
  render() { 
    return ( <div className="App">
    <Form onSubmite={this.addNewProfile} />
    <h1>The Github Cards App</h1>
    <CardList profiles={this.state.testData} />
    
  </div> );
  }
}
 
export default App;
