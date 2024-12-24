import { createApp } from "./lib/app.js";
import dbJson from "./fixtures/db.json" with { type: "json" };
import { Low, Memory } from 'lowdb';
import fs from 'fs';
import path from 'path';

// Define options for the app
const options = {
    static: ["public"], // Serve static files from the "public" directory
};

// Ensure the public directory exists
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

const adapter = new Memory(dbJson);
const db = new Low(adapter, dbJson);

// Create the app instance
const server = createApp(db, options);

// Start the server
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
server.listen(PORT, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
}, HOST);

export default server;