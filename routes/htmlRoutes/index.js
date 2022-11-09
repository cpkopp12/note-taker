//NPM IMPORTS ------------------------------------------
const path = require('path');
const router = require('express').Router();

//ROUTES FOR HTML FILES----------------------------------

//homepage
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../../public/index.html'));
});

//notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

//wildcard -> homepage 
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'../../public/index.html'))
});

module.exports = router;




