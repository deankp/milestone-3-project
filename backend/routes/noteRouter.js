const router = require("express").Router();
const auth = require("../middleware/auth");
const notes = require("../controllers/notes");

router.route("/").get(auth, notes.getNotes).post(auth, notes.createNote);

router
  .route("/:id")
  .get(auth, notes.getNote)
  .put(auth, notes.updateNote)
  .delete(auth, notes.deleteNote);

module.exports = router;
