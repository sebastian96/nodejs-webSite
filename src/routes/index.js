const express = require('express');
const router = express.Router();

const date = new Date();
const year = date.getFullYear();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'First webSite nodeJs', year: year });
})
router.get('/about', (req, res) => {
    res.render('about.html', { title: 'About', year: year });
})
router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact', year: year });
})

module.exports = router;