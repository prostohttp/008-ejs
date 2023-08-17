const bookStore = require("../store/books");

const uiIndexHandler = (req, res) => {
  const {books} = bookStore;
  res.render("books/index", { books: books });
}

const uiCreateHandler = (req, res) => {
	res.render("books/create", { books: bookStore });
};

const uiUpdateHandler = (req, res) => {
	const { books } = bookStore;
	const { id } = req.params;
	const book = books.find((book) => book.id === id);
	if (book) {
		res.render("books/update", { book: book });
	} else {
		res.status(404);
		res.render("notFound");
	}
}

const uiViewHandler = (req, res) => {
	const { books } = bookStore;
	const { id } = req.params;
	const book = books.find((book) => book.id === id);
	if (book) {
		res.render("books/view", { book: book });
	} else {
		res.status(404);
		res.render("notFound");
	}
}

module.exports = {
  index: uiIndexHandler,
  create: uiCreateHandler,
  update: uiUpdateHandler,
  view: uiViewHandler
}