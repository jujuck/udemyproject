import React from 'react';
import './Person.css';
//import Radium from 'radium'


const Person = (props) => {
    //Définition du style de l'element
/*    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }*/
    
    
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name}, I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default /*Radium(*/Person;