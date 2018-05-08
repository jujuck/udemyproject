import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log("persons.js in Construcor")
    }
    
    render() {
        console.log("persons.js in Render")
        return this.props.persons.map((person, index) => {
            return (
                <Person 
                clicked ={() => this.props.clicked(index)}// Appel à la fonction établie dans le fichier persons
                name={person.name}
                position={index}
                age={person.age} 
                key={person.id}
                changed ={(event) => this.props.changed(event, person.id)}/>
            );
        } ); 
    }
}


export default Persons