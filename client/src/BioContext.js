import React, { createContext, useState } from 'react';

export const BioContext = createContext({ bio: null });


export const BioProvider = ({ children }) => {
    const [bio, setBio] = useState(null);

    const fetchBio = async (frequency, depth, size, location, condition) => {
        try {
            const response = await fetch(`https://bioimpedance-backend.vercel.app/bios/${frequency}/${depth}/${size}/${location}/${condition}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const jsonData = await response.json();
            console.log("Fetched bios data:", jsonData);

            // Check if jsonData is an array (i.e. more than one row that matches the conditions)
            // if so, take just the first one
            if (Array.isArray(jsonData)) {
                console.log("More than one satisfied requirements, first result shown")
                setBio(jsonData.length > 0 ? jsonData[0] : null);
            } else {
                console.log("Result shown")
                setBio(jsonData);
            }

        } catch (err) {
            console.error("Error from fetchBio:", err.message);
        }
    };

    return (
        <BioContext.Provider value={{ bio, fetchBio }}>
            {children}
        </BioContext.Provider>
    );
};