const router = require("express").Router();
let notes = require("../../db/db.json");
const fs = require("fs");
const path = require("path");
//npm package for auto unique id assignment
const { v4: uuidv4 } = require("uuid");

router.get("/notes", async (req, res) => {
  // try {
    let results = notes;

    // console.log(results);

    res.json(results);
  // } catch (err) {
  //   console.log(err);
  //   res.status(400).json(err);
  // }
});
//FYI npm run watch for nodemon for proper delete functionality
router.delete("/notes/:id", (req, res) => {
  var deleteId = req.params.id;

    notes = notes.filter((note) => note.id !== deleteId);

    fs.writeFileSync(
      path.join(__dirname, "../../db/db.json"),
      JSON.stringify(notes)
    );

    res.json({notes});

});
//posts new notes passed from front end
router.post("/notes", (req, res) => {
  const newId = uuidv4();

  const newNote = {
    id: newId,
    title: req.body.title,
    text: req.body.text
  }
//pushes new notes to array
  notes.push(newNote);

  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(notes)
  );
//returns updated notes to front end
  res.json(notes);
});

module.exports = router;
