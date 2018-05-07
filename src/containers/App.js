import React, { Component } from 'react';
import Classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('App.js in Constructor')
        this.state = {
            persons: [
                {
                    id: 'asfa1',
                    name: "Max",
                    age: 28
                },
                {
                    id: 'asfa2',
                    name: "Manu",
                    age: 29
                },
                {
                    id: 'asfa3',
                    name: "Yola",
                    age: 25
                }
            ],
            showPersons: false
        }
    }
    
    componentWillMount() {
        console.log('App.js in component Will Mount')
    }
    
    componentDidMount() {
        console.log('App.js in Component did mount')
    }


    //Fonction de changement de nom
    nameChangeHandler = (event, id) => {
        //Récupération de l'index de l'object person 
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        
        
        //Récupération et stockage de l'objet person
        const person = {
            ...this.state.persons[personIndex]
        }
        
        
        //Enregistrement du nouveau nom dans l'objet person
        person.name = event.target.value;
        
        
        //Enregistrement de l'objet person dans le tableau de persons
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        
        this.setState({ persons: persons})
    }
    
    //fonction pour effacer les noms
    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1)
        this.setState( {persons: persons})
        
    }
    
    //Fonction pour affcher les noms
    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }
    
    render() {        
        let persons = null;
        
        console.log('App.js in Render')
        if(this.state.showPersons) {
            
           persons = (
             <div>
                <Persons 
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler} />
            </div>
           );
        }  
        
        return (
            <div className={Classes.App}>
                <button onClick={() => {this.setState({showPersons : true})}}>ShowPerson</button>
                <Cockpit 
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}/>
                {persons}   
            </div>

    );
  }
}

export default App;
