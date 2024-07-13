import React, { useState, useEffect, useContext, Fragment } from 'react';
import { BioContext } from '../BioContext';

const Score = () => {
    const { bio, fetchBio } = useContext(BioContext);

    return <Fragment>
        <div>
            <p>EIS Score : 9</p>
        </div>
    </Fragment>
}

export default Score;
