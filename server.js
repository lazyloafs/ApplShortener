const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Additional route setup (if needed)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Appl.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
