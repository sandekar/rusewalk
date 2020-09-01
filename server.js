const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8081;

const BUILD_FOLDER = path.resolve('./build');
const STATIC_FOLDER = path.resolve('./static');

app.use(express.json());
app.use(express.static(BUILD_FOLDER));
app.use('/api/static', express.static(STATIC_FOLDER));

// Handles any requests that don't match the ones above by serving them the index page
// This is the fallback for single page apps
app.get('*', (req, res) => {
    res.sendFile(BUILD_FOLDER + '/index.html');
});

app.listen(PORT, () => {
    console.log('Running server on ' + PORT);
});