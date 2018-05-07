import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import Radium, {StyleRoot } from 'radium'

class App extends Component {
    state = {
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
    deletePersonHanlder = (personIndex) => {
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
        
        //définition du style du  bouton en particulier
        const style = {
            backgroundColor : 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            margin: '5px',
            cursor: 'pointer',
            ':hover':  {
                backgroundColor: 'lightgreen',
                color: 'black'
            }//Possible grace à l'intégration de radium
        };
        
        let persons = null;
        if(this.state.showPersons) {
           persons = (
             <div>
                {this.state.persons.map((person, index) => {
                    return (
                        <Person 
                        click={() => this.deletePersonHanlder(index)}// Appel à la fonction établie dans le fichier persons
                        name={person.name}
                        age={person.age} 
                        key={person.id}//Obligatoire
                        changed={(event) => this.nameChangeHandler(event, person.id)}/> //Appel de la fonction changed établie dans le fichier persons   
                    )    
                })}
            </div>
           );
            //Changement du style en fonction de la réponse 
            style.backgroundColor ='red';
            style[':hover']=  {
                backgroundColor: 'lightred',
                color: 'black'
            }//Possible grace à l'intégration de radium
            
        }
        
        const classes = [];
            if (this.state.persons.length <= 2) {
                classes.push('red')
            }
            if (this.state.persons.length <= 1) {
                classes.push('bold')
            }
                
        
        return (
            <StyleRoot>
                <div className="App">
                    <h1>Hi!!, I'm a react App</h1>
                    <p className={classes.join(' ')}>This is really working!</p>
                    <button 
                        style={style}
                        onClick={this.togglePersonHandler}
                        >Toggle Person
                    </button>
                    {persons}   
                </div>
            </StyleRoot>
    );
  }
}

export default Radium(App);
