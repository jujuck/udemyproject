import React from 'react';
import Classes from './Cockpit.css';
import Aux from '../../Hoc/Aux'

const Cockpit = (props) => {
    const assignedClass = [];
    let btnClass = Classes.Button;
    
    //Couleur du bouton en fonction de l'affichage
    if(props.showPersons) {
        btnClass = [Classes.Button, Classes.Red].join(' ')
    }
    
    //Class du text d'introduction en fonction du nb d'item
    if (props.persons.length <= 2) {
        assignedClass.push(Classes.red)
    }
    if (props.persons.length <= 1) {
        assignedClass.push(Classes.bold)
    }
    
    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClass.join(' ')}>This is really working!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}
                >Toggle Person
            </button>
        </Aux>
    )
}

export default Cockpit;