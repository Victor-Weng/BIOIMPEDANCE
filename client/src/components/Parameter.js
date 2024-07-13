import React, { useState, useContext, useEffect, Fragment } from 'react';
import { BioContext } from '../BioContext';

const Parameter = () => {
    const { bio, fetchBio } = useContext(BioContext);

    return <Fragment>
        <button onClick={fetchBio}>Calculate</button>

        <div>
            <p>Test</p>
        </div>
    </Fragment>
}

export default Parameter;
