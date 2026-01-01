require('dotenv').config(); // safe for local only

const http = require('http');
const cors = require('cors');
const app = require('./app');
const { init } = require('./sockets');

const PORT = process.env.PORT || 4000;

// ✅ Add CORS middleware to allow your Vercel frontend
app.use(cors({
  origin: [
    "http://localhost:5173",              // local dev
    "https://fleet-frontend-ojx4.vercel.app" // deployed frontend
  ],
  credentials: true
}));

if (!process.env.JWT_SECRET) {
  console.warn("⚠️  JWT_SECRET is not defined!");
}

console.log("JWT_SECRET loaded:", !!process.env.JWT_SECRET);

const server = http.createServer(app);

// ✅ Initialize Socket.IO with CORS for frontend
init(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://fleet-frontend-ojx4.vercel.app"
    ],
    methods: ["GET", "POST"],
    credentials: true
  }
});

server.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
