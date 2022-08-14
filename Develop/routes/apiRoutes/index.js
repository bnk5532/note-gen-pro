const router = require('express').Router();
// const { createNewNote, filterByQuery } = require('')
const { notes } = require('../../data/notes')

router.get('/api/notes', (req, res) => {
   let results = notes;
   if (req.query) {
        results = filterByQuery(req.query, results);
   }
   res.json(results);


  });
  
router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const notes = createNewNote(req.body, notes);
    res.json(notes)

  });

module.exports = router;