
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <nav >
            <h1>WELCOME TO REACT-ROUTER APP</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/subpage">subpage</Link>
                <Link to="*">404</Link>
            </div>

        </nav>
    );
}