const express       = require('express');
const favicon       = require('serve-favicon');
const path          = require('path');

//App Config///
app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(favicon(path.join(__dirname, '/public/', 'favicon.ico')))

// Get landing page//
app.get('/', (req, res) => {
    res.render('index');
});

//Start Server
app.listen(process.env.PORT || 8000, () => {
    console.log('Education Reformed is live!');
});