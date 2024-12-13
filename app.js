const express = require('express');
const controller = require('./controller/mainController');

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Route to display data
app.get('/add/:item', (req, res) => {
    const item = req.params.item;
    controller.addAndRender(item);
    res.send(`Added: ${item}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
