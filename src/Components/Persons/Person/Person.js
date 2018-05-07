import React, {Component} from 'react';
import Classes from './Person.css';
//import Radium from 'radium'


class Person extends Component {
    constructor(props) {
        super(props);
        console.log("pers.js in Construcor")
    }
    
    componentWillMount() {
        console.log('pers.js in component Will Mount')
    }
    
    componentDidMount() {
        console.log('pers.js in Component did mount')
    }

    render() {
        console.log("pers.js in Render")
        return (
            <div className={Classes.Person}>
                <p onClick={this.props.clicked}>I'm {this.props.name}, I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
}

export default Person;