const router = require('express').Router();
// const { createNewNote, filterByQuery } = require('')
const { notes } = require('../../db/db.json');

router.get('/notes', async (req, res) => {
  try {
    let results = notes;
 
    res.json(results);

  } catch (err) {
    console.log(err);
    res.status(400).json(err)
  }
});

// router.delete(/api.notes:id), (req, res) => {
//   const result = findById(req.params.id, notes);
//   if (result) {
//     res.json
//   }
// }

router.delete('/notes/:id', (req, res) => {
  var deleteId = request.params.deleteId;
 
  request.db.get('notes').remove({'id': deleteId}, function(error, document) {
   if (err) res.send(err);
   return res.send("deleted");

  });
 });  
  
router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const notes = createNewNote(req.body, notes);
    res.json(notes)

  });

module.exports = router;