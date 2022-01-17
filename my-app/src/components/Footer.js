import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();
    return <footer>
        <p>Copright @{currentYear}</p>
    </footer>
}
export default Footer;