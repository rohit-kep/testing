import React, { Component } from 'react';
import './header.css';
import Theme from './Theme';

class Header extends Component {
    render() {
        return (
            <div className={this.props.className + ' header'}>
                <h1>Where in the World?</h1>             
                <Theme className={this.props.className} changeTheme = {this.props.changeTheme} ></Theme>
            </div>
        );
    }
}

export default Header;
