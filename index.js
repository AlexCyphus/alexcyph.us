const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const passwords = "hello world"
  // Return them as json
  res.json(passwords);
  console.log('api/passwords')
});

// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    console.log(req.url)
    let buildFile = path.join(__dirname+'/client/build/index.html')
    res.sendFile(buildFile);
    console.log()
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);