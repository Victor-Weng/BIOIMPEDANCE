const express = require("express"); // Get the library
const app = express(); // make the app run express
const cors = require("cors"); // lets front end make requests to back end
const pool = require("./db"); // require the db.js file from parent folder

// middleware
app.use(cors());
app.use(express.json());

//ROUTES//

// get all bios

app.get("/bios", async(req, res) => {
    try {
        const allBios = await pool.query("SELECT * FROM bio");
        res.json(allBios.rows);
    } catch (err) {
        console.error(err.message);
        
    }
});

// get a specific bio

/*
app.get("/bios/:frequency/:depth/:size/:location/:condition", async (req, res) => { 
    try {
        const { frequency, depth, size, location, condition } = req.params;
        const bio = await pool.query(
            `SELECT * FROM bio 
            WHERE 
                frequency = $1::numeric 
                AND depth = $2::numeric 
                AND size = $3::numeric 
                AND location ILIKE $4 
                AND condition ILIKE $5`,  
                [frequency, depth, size, location, condition]
        );
        
        res.json(bio.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Error in index.js" });
    }
});


*/

app.get("/bios/:frequency", async (req, res) => { 
    try {
        const { frequency, depth, size, location, condition } = req.params;
        const bio = await pool.query(
            `SELECT * FROM bio 
            WHERE 
                frequency = $1::numeric`,  
                [frequency]
        );
        
        res.json(bio.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Error in index.js" });
    }
});


//port = 5000; // express port

app.listen(() => {
    console.log("Server has started.");
});

module.exports = app;