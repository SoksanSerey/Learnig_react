import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
//import Error from './Error/Error';

class App extends Component {
  state = {
    persons: [
      {name: 'Soksan', age: 19 },
      {name: 'Senham', age: 18 },
      {name: 'Bopha', age: 22 }
    ],
    otherState: 'some other value',
    showPersons: null
  }

  deleteNameHandler= (indexPerson)=>{
    const persons=this.state.persons;
    persons.splice(indexPerson, 1);
    this.setState({persons: persons});
  }

  changeNameHandler=(event)=>{
    this.setState( {
      persons: [
        {name: 'Soksan', age: 19 },
        {name: event.target.value, age: 19 },
        {name: 'Bopha', age: 29 }
      ]
    })
  }

  togglePersonHandler=()=>{
    const doesShow =this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const styleVar= {
      backgroundColor: 'grey',
      border: '1px solid #ccc',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      boxShadow: '1px 4px 3px #ccc'
    }

    let persons=null;

    if(this.state.showPersons===true){
      persons = (
        <div>
          {this.state.persons.map((persons, index)=>{
            return <Person 
              click={()=>this.deleteNameHandler(index)}
              name={persons.name}
              age={persons.age}/>
            
          })}
          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            changed={this.changeNameHandler}>Old enough</Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.changeNameHandler}/>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this,'Soksan!!')}
            changed={this.changeNameHandler}/> */}
        </div>
      );
    }

    return (
      <div className="App">
          <h2>Hi! I'm Soksan</h2>
          <button 
            style={styleVar}
            onClick={this.togglePersonHandler}>Toggle Person</button>
          {persons}
      </div>


      // React.createElement('div',{className: 'App'}, React.createElement('h1',null,'HI! I\'m Soksan')) //it explains why we import react to our projects.
    );
  }
}

export default App;
