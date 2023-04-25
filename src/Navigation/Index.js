import React from "react";
import "./style.css";

const Navigation = () => (
    <div>
        <nav className="navigation">
            <ul>
                <li className="navigation__item">
                    <a className="link" href="#home"><b>GŁÓWNA</b></a>
                </li>
                {/* <li className="navigation__item">
                    <a className="link" href="#offer"><b>OFERTA</b></a>
                </li> */}
                <li className="navigation__item">
                    <a className="link" href="#gallery"><b>REALIZACJE</b></a>
                </li>
                <li className="navigation__item">
                    <a className="link" href="#contact"><b>KONTAKT</b></a>
                </li>
            </ul>
        </nav>
    </div>
);

export default Navigation