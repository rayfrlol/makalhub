const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set the timer end globally, 40 hours from when server starts
const endTime = Date.now() + 40 * 60 * 60 * 1000;

// Serve static files (like your timer.html, CSS, etc.)
app.use(express.static(path.join(__dirname)));

// Endpoint to send the global endTime timestamp
app.get('/api/endtime', (req, res) => {
  res.json({ endTime });
});

// For root route, serve timer.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'timer.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
