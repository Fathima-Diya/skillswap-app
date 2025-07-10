const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const socket = require("socket.io");
const userModel = require("./models/user");
const messageModel = require("./models/message");
const app = express();

app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:5173", "https://fathima-diya.github.io"],
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
    })
);

const server = http.createServer(app);

const io = socket(server, {
    cors: {
        origin: "http://localhost:5173", // Adjust this to your frontend URL
        methods: ["GET", "POST"],
    },
});

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI);

io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });

    socket.on("chat message", (msg) => {
        socket.broadcast.emit("message", msg);
    });
});

// User login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userModel.findOne({ username: username });
        if (user) {
            if (user.password === password) {
                res.json(user); // Send user details upon successful login
            } else {
                res.status(400).json({ error: "Incorrect password" });
            }
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// User registration
app.post("/register", async (req, res) => {
    try {
        const newUser = await userModel.create(req.body);
        res.json(newUser);
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Check username availability
app.post("/check-username", async (req, res) => {
    const { username } = req.body;
    try {
        const user = await userModel.findOne({ username: username });
        if (user) {
            res.json({ available: false });
        } else {
            res.json({ available: true });
        }
    } catch (error) {
        console.error("Error checking username availability:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Endpoint to search users based on education
app.get("/users/search/:education", async (req, res) => {
    const education = req.params.education;

    try {
        const users = await userModel.find({ education: education });
        return res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Send Message Endpoint
app.post("/send-message", async (req, res) => {
    const { senderId, receiverId, message } = req.body;
    try {
        const newMessage = await messageModel.create({
            sender: senderId,
            receiver: receiverId,
            message: message,
            timestamp: new Date(),
        });
        res.json(newMessage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Fetch Messages Endpoint
app.get("/messages/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        const messages = await messageModel.find({
            $or: [{ sender: userId }, { receiver: userId }],
        });
        res.json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Get all users
app.get("/users", async (req, res) => {
    try {
        const users = await userModel.find({}, { _id: 1, name: 1 });
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});
