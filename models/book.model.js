const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    publication_year: {
      type: Number,
      require: true,
    },
    price: {
      type: Number,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("bookSchema", bookSchema, "testbooks");
