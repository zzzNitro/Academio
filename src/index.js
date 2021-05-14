const express = require("express");
const cors = require("cors")
const app = express();
const pool = require("./db")



//Middleware
app.use(cors());
app.use(express.json());

/*
Routes convention /{app}/{version}/{ruta} 
User
Course
Section 
Class

*/

//Create
app.post("/app/0/user", async (req, res) => {
    try {
        const { user } = req.body;
        const newUser = await pool.query("INSERT INTO users ")
    } catch (error) {
        console.error(error.message)
    }
});

//View
/* app.post("/app/0/user", async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message)
    }
}); */

//Edit
/* app.post("/app/0/user", async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message)
    }
}); */

//Delete
/* app.post("/app/0/user", async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message)
    }
}); */

//Course Routes
//Create
/* app.post("/app/0/user", async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message)
    }
}); */

//View
/* app.post("/app/0/user", async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message)
    }
}); */

//Edit
/* app.post("/app/0/user", async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message)
    }
}); */

//Delete
/* app.post("/app/0/user", async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message)
    }
}); */

//Section Routes
//Create
/* app.post("/app/0/user", async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message)
    }
}); */

//View
/* app.post("/app/0/user", async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message)
    }
}); */

//Edit
/* app.post("/app/0/user", async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message)
    }
}); */

//Delete
/* app.post("/app/0/user", async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message)
    }
}); */

//Class Routes
//Create
/* app.post("/app/0/user", async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message)
    }
}); */

//View
/* app.post("/app/0/user", async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message)
    }
}); */

//Edit
/* app.post("/app/0/user", async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message)
    }
}); */

//Delete
/* app.post("/app/0/user", async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message)
    }
}); */

//Home

//NavBar


app.listen(3000, () => {
    console.log("Server running on port 3000")
});