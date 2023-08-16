const express = require("express");
const Book = require("../book");
const bookStore = require("../store/books");
const fileMulter = require("../middleware/file");

const router = express.Router();
router.post(
	"/api/books",
	fileMulter.fields([{ name: "fileCover", maxCount: 1 }, { name: "fileBook", maxCount: 1 }]),
	(req, res) => {
		const { books } = bookStore;
		if (req.files) {
			const { path: pathFileCover, originalname: originalNameFileCover } =
				req.files["fileCover"][0];
			const { path: pathFileBook, originalname: originalNameFileBook } =
				req.files["fileBook"][0];

			const newBook = new Book(
				req.body.title,
				req.body.description,
				req.body.authors,
				req.body.favorite,
				pathFileCover,
				req.body.fileName,
				pathFileBook,
				originalNameFileCover,
				originalNameFileBook
			);

			books.push(newBook);
			res.status(201);
			res.json(newBook);
		}
	}
);
module.exports = router;
