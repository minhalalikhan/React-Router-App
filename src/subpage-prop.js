import React from 'react';
import { useParams } from "react-router-dom";

export default function SubpageProp() {
    let params = useParams();

    return (
        <div className='subpage'>
            <h4>
                subpage prop   : {params.id}
            </h4>
        </div>
    );
}