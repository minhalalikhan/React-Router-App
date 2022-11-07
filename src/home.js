
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <div className='homepage'>
            <h1>
                HOME PAGE
            </h1>
            <br />
            <br />
            <br />
            <Link to='/subpage'>subpage</Link>
            <br />
            <br />
            <h4>to view 404 enter any url except for

                <br />
                1.subpage
                <br />
                2.subpage/:param

            </h4>
        </div>
    );
}