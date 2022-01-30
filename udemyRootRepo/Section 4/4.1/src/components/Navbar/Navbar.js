import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                {this.props.title}
            </div>
        )
    }
}

export default Navbar;