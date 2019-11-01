const express = require('express');
const path = require('path');
const app = express();

// SETTINGS OF SERVER
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// USE ROUTES 
app.use(require('./routes/'));

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// LISTENING THE SERVER
app.listen(app.get('port'), () => {
    console.log(`Server on port`, app.get('port'));
})