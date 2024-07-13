import React, { useState, useEffect, Fragment } from 'react';

const Graph = () => { // { bioDetails }
    const [bio, setBio] = useState(null);

    
    useEffect(() => {
        const fetchBio = async () => {
            try {
                const response = await fetch(`${process.env.REACT_BACKEND_URL}/bios`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const jsonData = await response.json();
                console.log("Fetched bios data:", jsonData); // Log fetched data
                setBio(jsonData);
            } catch (err) {
                console.error("Error from Graph.js :", err.message);
            }
        };

        fetchBio();
    }, []);

    return <Fragment>
        <div>
            <p>Test</p>
        </div>
    </Fragment>
}

export default Graph;
