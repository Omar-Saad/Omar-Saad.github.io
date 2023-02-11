import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./AccountsLinks.css";

function AccountsLinks() {
    return (
        <div className="icons-container">
            <ul className="icons">
                <li>
                    <a href="https://www.linkedin.com/in/omar-saad-/" target="_blank" rel="noreferrer">
                        <i className="bi bi-linkedin text-secondary"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/Omar-Saad" target="_blank" rel="noreferrer">
                        <i className="bi bi-github text-secondary"></i>
                    </a>
                </li>
                <li>
                    <a href="mailto:omarsaad34@gmail.com" target="_blank" rel="noreferrer">
                        <i className="bi bi-envelope text-secondary"></i>
                    </a>
                </li>
                </ul>
        </div>
    );

                
            
}
export default AccountsLinks;