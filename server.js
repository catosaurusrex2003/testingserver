// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server on port 3000 and listen on all network interfaces
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
