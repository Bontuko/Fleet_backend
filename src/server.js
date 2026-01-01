require('dotenv').config(); // ✅ Must be first

const http = require('http');
const app = require('./app');
const { init } = require('./sockets');

const server = http.createServer(app);
init(server);

const PORT = process.env.PORT || 4000;
console.log("JWT_SECRET is:", process.env.JWT_SECRET); // debug
server.listen(PORT, () => console.log(`Backend running on ${PORT}`));
