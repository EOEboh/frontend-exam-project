import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import { TbError404 } from 'react-icons/tb';
import { ImPointDown } from 'react-icons/im';
import { IconContext } from 'react-icons';

const NotFound = () => {
    return(
        <>
        <div className='App'>
           <h2>  Oops! Sorry, you clicked the wrong link </h2>
           <IconContext.Provider value={{ size: '2rem', color: '#F2183C'}}> <TbError404 /></IconContext.Provider>
           <p>
            Try this link instead <br />
            <IconContext.Provider value={{size: '1rem'}}>
                <ImPointDown />
            </IconContext.Provider>
           </p>
        <ul className='ul-list'>
            <li>
                <Link to='/' style={{ textDecoration: 'none' }}> 
                    <h4>Home Page</h4>
                </Link>
            </li>
        </ul>
        </div> 
        </>
    )
}

export default NotFound;