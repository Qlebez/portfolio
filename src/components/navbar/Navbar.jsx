import React from 'react';
import './navbar.css';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => { 
    return (
        <div className='navbar'>
            <div className='nav'>
                <h1>My Portfolio</h1>
                <div className='titles'>
                    <ul>
                        <li><HashLink to="/#top">About</HashLink></li>
                        <li><HashLink to="/#prjl">Projects</HashLink></li>
                        <li><HashLink to="/#skills">Skills</HashLink></li>
                    </ul>
                </div>
                <div className='cta'>
                    <div className='contact'>
                        <HashLink to="/#contactID">Contact</HashLink>
                    </div>
                </div>
            </div>
        </div>
    )
 }

 export default Navbar