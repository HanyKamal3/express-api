import Book from '../models/bookModel.js';

export const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

export const getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

export const createBook = async (req, res, next) => {
  try {
    const { title, author } = req.body;
    if (!title || !author)
      return res.status(400).json({ message: 'Title and author are required' });
    const newBook = await Book.create({ title, author });
    res.status(201).json(newBook);
  } catch (err) {
    next(err);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const { title, author } = req.body;
    if (!title || !author)
      return res.status(400).json({ message: 'Title and author are required' });
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author },
      { new: true, runValidators: true },
    );
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted' });
  } catch (err) {
    next(err);
  }
};
