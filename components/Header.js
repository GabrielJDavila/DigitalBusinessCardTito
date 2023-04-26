import React from "react"

export default function Header() {
    return (
        <header className="header">
            <h1 className="header-title">Tito The Cat</h1>
            <p className="header-description">Professional Bastard</p>
            <p className="header-website">titothecat.com</p>
            <div className="bio-links">
                <a className="email">Email</a>
                <a className="linked-in">LinkedIn</a>
            </div>
        </header>
    )
}