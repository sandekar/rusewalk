const express = require('express');
const path = require('path');

const app = express();

const PORT = 8081;
const STATIC_FOLDER = path.resolve('./static');

// app.use(express.json());
app.use('/api/static', express.static(STATIC_FOLDER));

app.listen(PORT, () => {
    console.log('Running server on ' + PORT);
});