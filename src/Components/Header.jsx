import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return(
        <div className='header'>
            <Link to='/portfolio' className='active-link'>
            <h3>Home</h3>
            </Link>
            <Link to='/contatos' className='active-link'>
            <h3>Contatos</h3>
            </Link>
        </div>
    )
}
export default Header;