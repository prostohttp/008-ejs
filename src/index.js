const express = require("express");
const path = require("path");
// middleware
const notFound = require("./middleware/404");
// routes
const index = require("./api/index");
const getBooks = require("./api/getBooks");
const view = require("./routes/viewRoute");
const create = require("./routes/createRoute");
const update = require("./routes/updateRoute");
const getBook = require("./api/getBook");
const addBook = require("./api/addBook");
const putBook = require("./api/putBook");
const bookDownload = require("./api/bookDownload");
const postUserLogin = require("./api/postUserLogin");
const deleteBook = require("./api/deleteBook");

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "../",'src/views'));
app.use("/public", express.static(path.join(__dirname, "../",'public')));
// route ui
app.use("", index);
app.use("", view);
app.use("", create);
app.use("", update);
// api
app.use("", bookDownload);
app.use("", postUserLogin);
app.use("", deleteBook);
app.use("", getBooks);
app.use("", getBook);
app.use("", addBook);
app.use("", putBook);
app.use(notFound);


const PORT = process.env.PORT || 3000;
app.listen(PORT, "127.0.0.1", () => {
	console.log(`Server started on port ${PORT}`);
});
