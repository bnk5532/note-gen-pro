const router = require("express").Router();
// const { createNewNote, filterByQuery } = require('')
const notes = require("../../db/db.json");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", async (req, res) => {
  try {
    let results = notes;

    console.log(results);

    res.json(results);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete("/notes/:id", (req, res) => {
  var deleteId = req.params.id;

    const updatedNotes = notes.filter((note) => note.id !== deleteId);

    fs.writeFileSync(
      path.join(__dirname, "../../db/db.json"),
      JSON.stringify(updatedNotes)
    );

    res.json({ ok: true });

});

router.post("/notes", (req, res) => {
  const newId = uuidv4();

  const newNote = {
    id: newId,
    title: req.body.title,
    text: req.body.text
  }

  notes.push(newNote);

  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(notes)
  );

  res.json(notes);
});

module.exports = router;
