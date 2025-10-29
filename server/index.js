// server/index.js

// 1. Import necessary packages
const express = require('express');
const cors = require('cors');

// 2. Create an Express application
const app = express();
const PORT = 5000; // We'll run our backend on port 5000

// 3. Set up middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Allow the server to understand JSON data

// 4. Define a basic API endpoint (a "route")
// When someone sends a GET request to http://localhost:5000/api/hello
// this function will run.
app.get('/api/hello', (req, res) => {
  // res.json() sends a JSON response back to the client
  res.json({ message: 'Hello from your new backend server!' });
});

// 5. Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running successfully on http://localhost:${PORT}`);
});