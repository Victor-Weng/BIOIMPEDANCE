import React, { useState, useContext, useEffect, Fragment } from 'react';
import { BioContext } from '../BioContext';
import {Divider, Card, CardHeader, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";


const Overview = () => {
    const { bio, fetchBio } = useContext(BioContext);

    return <Fragment>
        {bio ? (
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <Table isStriped aria-label="Parameter Overview">
                    <TableHeader>
                        <TableColumn>PROPERTY</TableColumn>
                        <TableColumn>VALUE</TableColumn>
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
                </CardHeader>
              </Card>
            ) : (
                <p>No bios data available</p>
            )}
    </Fragment>
}

export default Overview;
