const express = require("express"); // Get the library
const app = express(); // make the app run express
const cors = require("cors"); // lets front end make requests to back end
const pool = require("./db"); // require the db.js file from parent folder

// middleware
app.use(cors());
app.use(express.json());

//ROUTES//

// get all bios

app.get("https://bioimpedance-backend.vercel.app/bios", async(req, res) => {
    try {
        const allBios = await pool.query("SELECT * FROM bio");
        res.json(allBios.rows);
    } catch (err) {
        console.error(err.message);
        
    }
});

// get a specific bio

app.get("https://bioimpedance-backend.vercel.app/bios/:location/:size/:depth/:frequency", async (req, res) => { 
    try {
        const { location, size, depth, frequency } = req.params;
        const bio = await pool.query(
            "SELECT * FROM bio WHERE location = $1 AND size = $2 AND depth = $3 AND frequency = $4", 
            [location, size, depth, frequency]
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