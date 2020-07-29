import React from 'react';
import League from './League';
import Reports from './Reports';
import Legacy from './Legacy';
import Participate from './Participate';
import StartPage from './StartPage';


const Navbar = () => {
    return (
        <div className='app-wrapper'>
             <StartPage />
            <League />
            <Reports />
            <Legacy />
            <Participate /> 
        </div>
    );
}

export default Navbar;