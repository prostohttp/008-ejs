const express = require("express");
const bookStore = require("../store/books");

const router = express.Router();
router.delete("/api/books/:id", (req, res) => {
	const { books } = bookStore;
	const { id } = req.params;
	const index = books.findIndex((book) => book.id === id);
	if (index !== -1) {
		books.splice(index, 1);
		res.json("ok");
	} else {
		res.status(404);
		res.json("Code: 404");
	}
});

module.exports = router;
