import React, { useState, useContext, useEffect, Fragment } from 'react';
import { BioContext } from '../BioContext';

const Overview = () => {
    const { bio, fetchBio } = useContext(BioContext);

    return <Fragment>
        <div>
            <p>Test</p>
        </div>
    </Fragment>
}

export default Overview;
