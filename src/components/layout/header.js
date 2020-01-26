import React from 'react';
import {Link} from 'react-router-dom';

const hdStyle =  {
        display:'flex',
        padding:'2rem',
        backgroundColor:'#a9a9a9',
        margin:'0px',
        justifyContent:'center'
        
    
}

const navStyle ={
    display:'flex',
    padding:'2rem',
    backgroundColor:'#a9a9a9',
    
    justifyContent:'center' ,
    alignContent:'flex-end',
    fontSize:'1.3em'
}

let navelStyle ={
    padding:'0px 0.5em',
    textDecoration:'none',
    color:'black',
    
}




 function Header() {



    return (
        <div>
            <header >
                <h1 style={hdStyle}> ToDo List!</h1>
                
               <nav style={navStyle}> <Link to="/" style={navelStyle} >Home  </Link> | <Link to="/about" style={navelStyle}>   About </Link> </nav>
            </header>
        </div>
    )
}

export default Header;
