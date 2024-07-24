import React, { useState, useContext, useEffect, Fragment } from 'react';
import { BioContext } from '../BioContext';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";


const Overview = () => {
    const { bio, fetchBio } = useContext(BioContext);

    return <Fragment>
        <div className="padding">
        {bio ? (
                <Table isStriped hideHeader aria-label="Parameter Overview" color="danger">
                    <TableHeader>
                        <TableColumn></TableColumn>
                        <TableColumn></TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                        <TableCell>Location</TableCell>
                        <TableCell>{bio.location}</TableCell>
                        </TableRow>
                        <TableRow key="2">
                        <TableCell>Size</TableCell>
                        <TableCell>{bio.size}</TableCell>
                        </TableRow>
                        <TableRow key="3">
                        <TableCell>Depth</TableCell>
                        <TableCell>{bio.depth}</TableCell>
                        </TableRow>
                        <TableRow key="4">
                        <TableCell>Frequency</TableCell>
                        <TableCell>{bio.frequency}</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
            ) : (
                <p>No bios data available</p>
            )}
            </div>
    </Fragment>
    
}

export default Overview;
