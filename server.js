const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Bonjour le monde');
});

const PORT = 5000

app.listen(PORT, console.log('Server running on port 5000'));