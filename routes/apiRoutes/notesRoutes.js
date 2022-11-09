//INSTANTIATE ROUTER AND IMPORT NOTES FROM DB -------------
const router = require('express').Router();
// const { METHODS NEEDED FOR FUNCTIONALITY WITHIN SERVER } = require('../../lib/notes.js');
const notes  = require('../../db/db');
const { validateNote, createNewNote } = require('../../lib/notes');

//SET UP ROUTES CALLED IN PUBLIC INDEX.JS -------------------
//route /api/notes get and post
router.get('/', (req, res) => {
    //RETURN THE CURRENT NOTES FROM THE db.json
    res.json(notes);
});

router.post('/', (req, res) => {
    //going to need to write for post fetch request
    req.body.id = notes.length.toString();
    const isNote = validateNote(req.body)
    
    if (!isNote) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
        console.log(note);
    }

});

//need route if id provided to delete note
router.delete('/notes/:id', (req, res) => {
    //going to need to write code for delete fetch request
});

module.exports = router;
