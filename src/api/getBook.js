const express = require("express");
const bookStore = require("../store/books");

const router = express.Router();
router.get("/api/books/:id", (req, res) => {
	const { books } = bookStore;
	const { id } = req.params;
	const book = books.find((book) => book.id === id);
	if (book) {
		res.json(book);
	} else {
		res.status(404);
		res.json("Code: 404");
	}
});

module.exports = router;
