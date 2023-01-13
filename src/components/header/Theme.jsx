import React, { Component } from 'react';
import {BsMoonFill} from 'react-icons/bs'

class Theme extends Component {
    render() {
        return (
            <button onClick={this.props.changeTheme} className= { this.props.className + ' theme'}>
                <BsMoonFill></BsMoonFill>                            
                Dark Mode
            </button>
        );
    }
}

export default Theme;
