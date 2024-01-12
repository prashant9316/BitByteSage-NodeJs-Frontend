require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path'); // Add this line
const app = express();

// Enable CORS policy
app.use(cors());

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Enable Morgan for logging
app.use(morgan('dev'));

// Set EJS as the view engine and set the views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Add this line


app.get('/', (req, res) => {
    res.send('index');
});

// Define routes
app.get('/home', (req, res) => {
    res.render('index');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
