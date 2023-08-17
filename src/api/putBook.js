const express = require("express");
const bookStore = require("../store/books");
const fileMulter = require("../middleware/file");

const router = express.Router();
router.put(
	"/api/books/:id",
	fileMulter.fields([
		{ name: "filecover", maxCount: 1 },
		{ name: "filebook", maxCount: 1 },
	]),
	(req, res) => {
		const { books } = bookStore;
		const { title, description, authors, favorite, fileName } = req.body;
		const { path: pathFileCover, originalname: originalNameFileCover } =
			req.files["filecover"][0];
		const { path: pathFileBook, originalname: originalNameFileBook } =
			req.files["filebook"][0];
		const { id } = req.params;
		const index = books.findIndex((book) => book.id === id);
		if (index !== -1) {
			books[index] = {
				...books[index],
				title,
				description,
				authors,
				favorite,
				filecover: pathFileCover,
				fileName,
				filebook: pathFileBook,
				originalNameFileCover,
				originalNameFileBook,
			};
			res.json(books[index]);
		} else {
			res.status(404);
			res.json("Code: 404");
		}
	}
);

module.exports = router;
