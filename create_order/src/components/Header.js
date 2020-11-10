import React from 'react';
import './css/Header.css';
 

const Header = () => { 
    return(
        <div className="p-4 background bg-white">
             <header className='headcls'>
                <h1 className="headclsTitle">WILLI<span className="headclsTitleSpan">AM SO</span>NOMA</h1>
                <p className="headclsp">CALIFORNIA</p>
            </header>
        </div>
    );
}

export default Header;