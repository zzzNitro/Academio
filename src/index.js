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

//Create USER
app.post("/app/0/user", async (req, res) => {
    try {
        const { username, birthday, enrolled_courses, teaching_courses } = req.body;
        const newUser = await pool.query(
            'INSERT INTO users (username, birthday, enrolled_courses, teaching_courses) VALUES ($1, $2, $3, $4) RETURNING *',
            [username, birthday, enrolled_courses, teaching_courses]
        );

        res.json(newUser.rows[0]);
    } catch (error) {
        console.error(error.message)
    }
});

//View all USERS
app.get("/app/0/user", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    } catch (error) {
        console.error(error.message)
    }
});

//View USER (case sensitive)
app.get("/app/0/user/:username", async (req, res) => {
    try {
        const { username } = req.params;
        const user = await pool.query(
            "SELECT * FROM users WHERE username = $1",
            [username]
        );
        res.json(user.rows[0]);
    } catch (error) {
        console.error(error.message)
    }
});

//Update USER
app.put("/app/0/user/:username", async (req, res) => {
    try {
        const { username } = req.params;
        const updateUser = await pool.query(
            "UPDATE users SET username = $1, birthday = $2, enrolled_courses = $3, teaching_courses = $4 WHERE username = $5 RETURNING *",
            [req.body.username, req.body.birthday, req.body.enrolled_courses, req.body.teaching_courses, username]
        );
        res.json(`${username} Profile's Updated`)

    } catch (error) {
        console.error(error.message)
    }
});

//Delete USER
app.delete("/app/0/user/:username", async (req, res) => {
    try {
        const {username} = req.params;
        const deleteUser = await pool.query(
            "DELETE FROM users WHERE username = $1",
            [username]
        );
        res.json("User was deleted!")

    } catch (error) {
        console.error(error.message)
    }
});

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