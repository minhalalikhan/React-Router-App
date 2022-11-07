import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Subpage() {

    return (
        <div>
            <h1>
                sub page
            </h1>
            <br />

            <p>enter url : subpage/[param] to view outlet</p>
            <br />
            <br />
            <Outlet />
        </div>
    );
}