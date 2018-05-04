import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
    state = {
            persons: [
                {
                    name: "Max",
                    age: 28
                },
                {
                    name: "Manu",
                    age: 29
                },
                {
                    name: "Yola",
                    age: 25
                }
            ],
        }

    
    switchNameHandler = (newName) => {
        //console.log('was clicked');
        this.setState({
            persons: [
                {name: "Maximilien", age: 28},
                {name: "Manuel", age: 29},
                {name: "Yola", age: 25}
            ]
        })
    }
    
    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: "Max", age: 28},
                {name: event.target.value, age: 29},
                {name: "Yola", age: 25}
            ]
        })
    }
    
    render() {
        const style = {
            backgroundColor : 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            margin: '5px',
            cursor: 'pointer'
        }
        
        return (
            <div className="App">
                <h1>Hi!!, I'm a react App</h1>
                <p>This is really working!</p>
                <button 
                    style={style}
                    onClick={this.switchNameHandler}>Switch Name</button>
                <Person 
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age} />
                <Person 
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler}
                    changed={this.nameChangeHandler}>My Hobbies : Reading
                </Person>
                <Person 
                    name={this.state.persons[2].name} 
                    age={this.state.persons[2].age} />
            </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!!!, I AM A REACT APP'))
  }
}

export default App;
