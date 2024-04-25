const bookModel = require("../../models/book.model");

const getAllBooks = async (req, res) => {
  try {
    let filter = {};
    if (req.query.publication_year) {
      filter.publication_year = req.query.publication_year;
    }
    if (req.query.author) {
      const authorRegex = new RegExp(req.query.author, "i");
      filter.author = authorRegex;
    }
    const allbooks = await bookModel.find(filter);
    return res.status(200).json({
      statusCode: 200,
      message: "Success get all books",
      allbooks,
    });
  } catch (err) {
    return res.status(404).json({
      statusCode: 404,
      message: "Something went wrong..",
    });
  }
};

module.exports = getAllBooks;
