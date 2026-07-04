const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const email = "admin@gmail.com";
const password = "123456";

app.post("/login", (req, res) => {

    const { email: userEmail, password: userPassword } = req.body;

    if (!userEmail || !userPassword) {

        return res.status(400).json({
            success: false,
            message: "Please enter Email and Password"
        });

    }

    if (userEmail === email && userPassword === password) {

        return res.json({
            success: true,
            message: "Login Successful"
        });

    }

    return res.status(401).json({
        success: false,
        message: "Invalid Email or Password"
    });

});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});