let books = [
  { id: 1, title: 'Clean Code', author: 'Robert Martin' },
  { id: 2, title: 'The Pragmatic Programmer', author: 'David Thomas' },
  { id: 3, title: "You Don't Know JS", author: 'Kyle Simpson' },
];

export const getAllBooks = async (req, res, next) => {
  try {
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

export const getBookById = async (req, res, next) => {
  try {
    const book = books.find((b) => b.id === parseInt(req.params.id));
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
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
  } catch (err) {
    next(err);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: 'Book not found' });
    const { title, author } = req.body;
    if (!title || !author)
      return res.status(400).json({ message: 'Title and author are required' });
    book.title = title || book.title;
    book.author = author || book.author;
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    const index = books.findIndex((b) => b.id === parseInt(req.params.id));
    if (index === -1)
      return res.status(404).json({ message: 'Book not found' });
    books.splice(index, 1);
    res.status(200).json({ message: 'Book deleted' });
  } catch (err) {
    next(err);
  }
};
