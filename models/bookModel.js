import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
      required: [true, 'Author is required'],
    },
  },
  { timestamps: true },
);

const Book = mongoose.model('Book', bookSchema);

export default Book;
