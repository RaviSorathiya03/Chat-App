import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import {Signinrouter} from './routes/user.js'
import { authentication } from './middleware/auth.js'

// Initialize Express app
const app = express();

// Create an HTTP server to integrate with Socket.IO
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
    cors: {
        origin: "*", // Replace '*' with your frontend domain in production
        methods: ["GET", "POST"],
    },
});

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1",  Signinrouter)

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the real-time server!');
});

// Socket.IO logic
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Listen for events from the client
    socket.on('message', (data) => {
        console.log(`Message received: ${data}`);
        // Broadcast the message to all connected clients
        io.emit('message', data);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

// Start the server
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
