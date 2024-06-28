const express = require("express")
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');
const user = require('./controllers/users')

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', user)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))