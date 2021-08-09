import React, { useState } from 'react'
import "./header.css"


const Header=() => {
    const time= new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(time);
    const handler=()=>{
        const time= new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(handler,1000);
    return <>
        <section className="navbar">
        <ul className="links">
        <li><a href="#Cart">Cart</a></li>
        <li><a href="#Recipes">Recipes</a></li>
        <li><a href="#Menu">Menu</a></li>
        <li><a href="#Home">Home</a></li>
        
        <span className="ctime">           
                    <h4 >{ctime}</h4>
                </span>
        </ul>
        </section>
        </>
}

export default Header;