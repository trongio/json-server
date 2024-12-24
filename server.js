import { createApp } from "./lib/app.js";
import dbJson from "./fixtures/db.json" with { type: "json" };
import { Low, Memory } from 'lowdb'
// Define options for the app

const options = {
    static: ["public"], // Serve static files from the "public" directory
};
const adapter = new Memory(dbJson)
const db = new Low(adapter, dbJson)

// Create the app instance
const app = createApp(db, options);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});