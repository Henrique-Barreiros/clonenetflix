import React from "react";
import './Header.css';

export default ({black}) =>{
    return(
        <header className={black ? 'black':''}>
            <div className="header--logo">
                <a href="/">
                    <img src='data:image/png;base64,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' alt='Netflix'></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt="Usuário"/>
                </a>
            </div>
        </header>
    );
}