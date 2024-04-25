const bookModel = require("../../models/book.model");

const updateBook = async (req, res) => {
  try {
    const updatebook = await bookModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      statusCode: 200,
      message: "book updated successfully",
      updatebook,
    });
  } catch (err) {
    console.log("error while update book", err);
    return res.status(404).json({
      statusCode: 404,
      message: "something went wrong..",
    });
  }
};

module.exports = updateBook;
