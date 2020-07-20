const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log('Listening on Port ' + PORT)
});