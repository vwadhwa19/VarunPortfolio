import React from "react";
import '../styles/Footer.css';

function Footer(){

    const today = new Date(); 
    const thisYear = today.getFullYear(); 

    return (
        <div className="footer">
           <span id="footerText">© {thisYear} - Varun Wadhwa</span>
        </div>
    );
};

export default Footer;