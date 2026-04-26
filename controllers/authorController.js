import Author from '../models/authorModel.js';

export const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    next(err);
  }
};

export const getAuthorById = async (req, res, next) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    res.status(200).json(author);
  } catch (err) {
    next(err);
  }
};

export const createAuthor = async (req, res, next) => {
  try {
    const { name, nationality, bio } = req.body;
    if (!name)
      return res.status(400).json({ message: 'Author name is required' });
    const newAuthor = await Author.create({ name, nationality, bio });
    res.status(201).json(newAuthor);
  } catch (err) {
    next(err);
  }
};

export const deleteAuthor = async (req, res, next) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    res.status(200).json({ message: 'Author deleted' });
  } catch (err) {
    next(err);
  }
};
