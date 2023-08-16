const express = require("express");
const bookStore = require("../store/books");

const router = express.Router();
router.get("/books/:id/update", (req, res) => {
	const { books } = bookStore;
	const { id } = req.params;
	const book = books.find((book) => book.id === id);
	if (book) {
		res.render("books/update", { book: book });
	} else {
		res.status(404);
		res.render("notFound");
	}
});

module.exports = router;
