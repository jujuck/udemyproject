import React, {Component} from 'react';
import PropTypes from 'prop-types'

import Classes from './Person.css';
import withClass from '../../../Hoc/withClass'
import Aux from '../../../Hoc/Aux'

class Person extends Component {
    
    componentDidMount () {
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
    }
    
    render() {
        return (
            <Aux>
                <p onClick={this.props.clicked}>I'm {this.props.name}, I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input 
                    ref={(input) => { this.inputElement = input }}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>
        );
    }
}

Person.propTypes = {
    clicked: PropTypes.func ,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, Classes.Person);