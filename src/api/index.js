const express = require("express");
const {books} = require("../store/books");
const router = express.Router();
router.get("/", (req, res) => {
	res.render("books/index", {
		books: books,
	});
});

module.exports = router;
