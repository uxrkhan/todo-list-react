import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <p>Todo List</p>
            <p style={linkStyle}><Link className="links" to='/'>Home</Link> | <Link className="links" to='about'>About</Link></p>    
         </header>
    )
}

const headerStyle = {
    background: '#1f1f1f',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    fontSize: '2rem',
}  

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '15px',
}

export default Header;