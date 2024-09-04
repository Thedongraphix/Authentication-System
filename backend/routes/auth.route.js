import express from "express";

const router = express.Router();

router.get ("/signup", (req, res) => {
    res.send("Signup route");
});


router.get ("/login", (req, res) => {
    res.send("Login route");
});


router.get ("/Signout", (req, res) => {
    res.send("Signout route");
});

export default router;