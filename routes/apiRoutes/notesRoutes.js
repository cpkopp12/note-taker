//INSTANTIATE ROUTER AND IMPORT NOTES FROM DB -------------
const router = require('express').Router();
const { notes } = require('../../db/db.json');

//SET UP ROUTES CALLED IN PUBLIC INDEX.JS -------------------
//route /api/notes get and post
router.get('/notes', (req, res) => {
    //going to need to write code for get fetch request
});

router.post('/notes', (req, res) => {
    //going to need to write for post fetch request
});

//need route if id provided to delete note
router.delete('/notes/:id', (req, res) => {
    //going to need to write code for delete fetch request
});
