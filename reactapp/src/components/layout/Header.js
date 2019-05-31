import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header className="bg-dark rounded" style={headerStyle}>
            <h1>JamLog</h1>
            
            <Link style={linkStyle} to="/">
                Home
            </Link>{" "}
            |{" "}
            <Link style={linkStyle} to="/about">
                About
            </Link>
        </header>
    );
}

const headerStyle = {
    color: "#ffffff",
    textAlign: "center",
    padding: "10px"
};

const linkStyle = {
    color: "#ffffff",
    textDecoration: "none"
};
