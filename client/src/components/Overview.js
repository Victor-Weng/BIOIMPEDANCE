import React, { useState, useContext, useEffect, Fragment } from 'react';
import { BioContext } from '../BioContext';

const Overview = () => {
    const { bio, fetchBio } = useContext(BioContext);

    return <Fragment>
        {bio ? (
                <div>
                    <p>Location: {bio.location}</p>
                    <p>Size: {bio.size}</p>
                    <p>Depth: {bio.depth}</p>
                    <p>Frequency: {bio.frequency}</p>
                    <p>Condition: {bio.condition}</p>
                </div>
            ) : (
                <p>No bios data available</p>
            )}
    </Fragment>
}

export default Overview;
