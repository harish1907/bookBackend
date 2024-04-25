const bookModel = require("../../models/book.model");

const getBook = async (req, res) => {
  const bookObject = await bookModel.findOne({ _id: req.params.id });
  if (!bookObject) {
    return res.status(404).json({
      statusCode: 404,
      message: "book not found",
    });
  }
  return res.status(200).json({
    statusCode: 200,
    message: "book found successfully.",
    bookObject,
  });
};

module.exports = getBook;
