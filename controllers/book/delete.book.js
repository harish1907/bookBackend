const bookModel = require("../../models/book.model");

const deleteBook = async (req, res) => {
  try {
    await bookModel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({
      statusCode: 200,
      message: "book deleted successfully",
    });
  } catch (err) {
    console.log("delete book object error.", err);
    res.status(404).json({
      statusCode: 404,
      message: "Something went wrong.",
    });
  }
};

module.exports = deleteBook;
