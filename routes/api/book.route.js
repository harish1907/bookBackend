const router = require("express").Router();
const createBook = require("../../controllers/book/create.book");
const getBook = require("../../controllers/book/get.book");
const deleteBook = require("../../controllers/book/delete.book");
const updateBook = require("../../controllers/book/update.book");
const getAllBooks = require("../../controllers/book/getall.book");

router.post("/create", createBook);
router.get("/get/:id", getBook);
router.delete("/delete/:id", deleteBook);
router.put("/update/:id", updateBook);
router.get("/getall", getAllBooks);

module.exports = router;
