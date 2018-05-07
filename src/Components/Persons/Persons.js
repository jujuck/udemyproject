import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log("persons.js in Construcor")
    }
    
      componentWillMount() {
        console.log('persons.js in component Will Mount')
    }
    
    componentDidMount() {
        console.log('persons.js in Component did mount')
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('Update [persons.js] inside componentWill Receive')
    }
    
    shouldComponentUpdate(nextProps) {
        console.log('Update persons.js inside shouldComponentUpdate')
        return nextProps.persons !== this.props.persons;
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log('Update Person.js inside component Will Update')
    }
    
    componentDidUpadte() {
        console.log('Did Update persons.js inside ComponentDidUpdate')
    }
    
    render() {
        console.log("persons.js in Render")
        return this.props.persons.map((person, index) => {
            return (
                <Person 
                clicked ={() => this.props.clicked(index)}// Appel à la fonction établie dans le fichier persons
                name={person.name}
                age={person.age} 
                key={person.id}
                changed ={(event) => this.props.changed(event, person.id)}/>
            );
        } ); 
    }
}


export default Persons