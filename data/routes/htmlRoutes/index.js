const path = require('path');
const router = require('express').Router();


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// router.delete(/api.notes:id), (req, res) => {
//   const result = findById(req.params.id, notes);
//   if (result) {
//     res.json
//   }
// }

router.delete("/notes/:id", (req, res) => {
  var deleteId = request.params.deleteId;
 
  request.db.get('notes').remove({'id': deleteId}, function(error, document) {
   if (error) response.send(error);
   return response.send("deleted");
  });
 });

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

module.exports = router; /Users/BNKing/Documents/Projects/note-gen-pro/data/public/index.html