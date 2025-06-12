import { useState } from 'react'
import './Header.css'

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.fontSize = "25px";
        document.getElementById("header").style.padding = "20px 10px 20px 10px";
    } else {
        document.getElementById("header").style.fontSize = "30px";
        document.getElementById("header").style.padding = "30px 10px 30px 10px";
    }
}
function Header() {

    return (
    <>
        <div id="header">
            <span>Home</span>
            <div className='header-link-container'>
                <span>About</span>
                <span>Portfolio</span> {/* In the future I want this to be a hoverable object that brings down experience, projects, skils... */}
                <span>Contact</span>
            </div>
        </div>
    </>
    )
}

export default Header
