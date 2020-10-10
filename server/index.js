// imports
const express = require('express');

// globals
const app = express();
const port = 3000;

app.use('/', express.static('../'));

// main
app.listen(port, function() {
        console.log(`Server running on port ${port}`);
});