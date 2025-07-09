import { useState } from 'react'
import './Header.css'

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.fontSize = "25px";
        document.getElementById("header").style.padding = "10px 10px";
    } else {
        document.getElementById("header").style.fontSize = "30px";
        document.getElementById("header").style.padding = "20px 10px";
    }
}
function Header() {

    return (
    <>
        <div id="header">
            <span>Home</span>
            <div className='header-link-container'>
                <span className='header-link'>About</span>
                <span className='header-link'>Portfolio</span> {/* In the future I want this to be a hoverable object that brings down experience, projects, skils... */}
                <span className='header-link'>Contact</span>
            </div>
        </div>
    </>
    )
}

export default Header
