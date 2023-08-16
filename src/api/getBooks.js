const express = require("express");
const booksStore = require("../store/books");

const router = express.Router();
router.get("/api/books", (req, res) => {
	const { books } = booksStore;
	res.json(books);
});

module.exports = router;
