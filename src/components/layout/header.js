import React from 'react';

const hdStyle =  {
        display:'flex',
        padding:'2rem',
        backgroundColor:'#a9a9a9',
        margin:'0px',
        justifyContent:'center'
        
    
}

 function Header() {



    return (
        <div>
            <header>
                <h1 style={hdStyle}> ToDo List!</h1>
            </header>
        </div>
    )
}

export default Header;
