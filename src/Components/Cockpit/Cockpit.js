import React from 'react';
import Classes from './Cockpit.css'

const Cockpit = (props) => {
    const assignedClass = [];
    let btnClass = '';
    
    //Couleur du bouton en fonction de l'affichage
    if(props.showPersons) {
        btnClass = Classes.Red
    }
    
    //Class du text d'introduction en fonction du nb d'item
    if (props.persons.length <= 2) {
        assignedClass.push(Classes.red)
    }
    if (props.persons.length <= 1) {
        assignedClass.push(Classes.bold)
    }
    
    return (
        <div>
            <h1>{props.appTitle}</h1>
            <p className={assignedClass.join(' ')}>This is really working!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}
                >Toggle Person
            </button>
        </div>
    )
}

export default Cockpit;