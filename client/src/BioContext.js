import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const BioContext = createContext();

// Create the provider component
export const BioProvider = ({ children }) => {
    const [bio, setBio] = useState(null);

    const fetchBio = async () => {
        try {
            const response = await fetch(`https://bioimpedance-backend.vercel.app/bios`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const jsonData = await response.json();
            console.log("Fetched bios data:", jsonData); // Log fetched data
            setBio(jsonData);
        } catch (err) {
            console.error("Error from Graph.js:", err.message);
        }
    };

    useEffect(() => {
        fetchBio();
    }, []);

    return (
        <BioContext.Provider value={{ bio, fetchBio }}>
            {children}
        </BioContext.Provider>
    );
};

