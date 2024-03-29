// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the default home page
app.get('/', (req, res) => {
    // Get the current date and time
    const now = new Date();

    // Format the date and time
    const formattedDateTime = now.toISOString().replace('T', ' ').substring(0, 19);
    
    console.log("got a request", formattedDateTime);
    
    res.send('Hello World!');
});

// Start the server on port 3000 and listen on all network interfaces
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
