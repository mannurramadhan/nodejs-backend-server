const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.send('Bonjour le monde');
});

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`));