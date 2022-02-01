import React from 'react';

function Header() {
    return (
        <div style={{
            fontWeight: 'bold',
            display: 'flex', 
            backgroundColor: 'red', 
            justifyContent: 'space-between', 
            padding: 10}}>
        <div className="logo">LOGO</div>
        <div className="menu">MENU</div>
    </div>
    )
}

export default Header;