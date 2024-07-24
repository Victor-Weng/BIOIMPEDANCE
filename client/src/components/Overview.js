import React, { useState, useContext, useEffect, Fragment } from 'react';
import { BioContext } from '../BioContext';


const Overview = () => {
    const { bio, fetchBio } = useContext(BioContext);

    return <Fragment>
        <div className="container">
            <div className="padding">
                {bio ? (
                    <table className="bio-table">
                        <tbody>
                            <tr>
                                <th>Location</th>
                                <td>{bio.location}</td>
                            </tr>
                            <tr>
                                <th>Size</th>
                                <td>{bio.size}</td>
                            </tr>
                            <tr>
                                <th>Depth</th>
                                <td>{bio.depth}</td>
                            </tr>
                            <tr>
                                <th>Frequency</th>
                                <td>{bio.frequency}</td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <p>No bios data available</p>
                )}
            </div>
        </div>
    </Fragment>

}

export default Overview;
