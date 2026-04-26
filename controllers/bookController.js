let books = [
  { id: 1, title: 'Clean Code', author: 'Robert Martin' },
  { id: 2, title: 'The Pragmatic Programmer', author: 'David Thomas' },
  { id: 3, title: "You Don't Know JS", author: 'Kyle Simpson' },
];

export const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

export const getBookById = (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(book);
};

export const createBook = (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
};

export const updateBook = (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  const { title, author } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;
  res.status(200).json(book);
};

export const deleteBook = (req, res) => {
  const index = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Book not found' });
  books.splice(index, 1);
  res.status(200).json({ message: 'Book deleted' });
};
