const bookModel = require("../../models/book.model");

const createBook = (req, res) => {
  try {
    const book = new bookModel(req.body);
    book.save();
    return res.status(200).json({
      statusCode: 200,
      message: "book create successfully",
      book,
    });
  } catch (err) {
    console.log("error from createbook", err);
    return res.status(404).json({
      statusCode: 404,
      message: "Success",
    });
  }
};

module.exports = createBook;
