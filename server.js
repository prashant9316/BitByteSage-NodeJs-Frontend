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


const resourcesRoutes = require('./routes/resources');
// Define routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about-us', (req, res) => {
    res.render('about-us');
})

app.get('/contact-us', (req, res) => {
    res.render('contact-us');
})

app.get('/newsletter', (req, res) => {
    res.render('newsletter-subscribe');
})

app.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy');
})

app.get('/support-center', (req, res) => {
    res.render('support-center');
})

app.get('/partners-certificate', (req, res) => {
    res.render('partners-certifications');
})

app.get('/services/caas', (req, res)=> {
    res.render('services/caas')
})

app.get('/services/consulting', (req, res) => {
    res.render('services/consulting');
})

app.get('/services/network-security', (req, res)=> {
    res.render('services/network-security');
})

app.get('/services/managed-services', (req, res)=> {
    res.render('services/managed-it-services');
})

app.get('/services/network', (req, res) => {
    res.render('services/network');
})

app.get('/services/cloud-services', (req, res) => {
    res.render('services/cloud-services')
})

app.get('/services/request-quotation', (req,res) => {
    res.render('services/request-quote')
})

app.get('/services/unified-communications', (req, res) => {
    res.render('services/unified-communications')
})


app.use('/resources', resourcesRoutes)

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Open the application: http://localhost:${port}`);
});
