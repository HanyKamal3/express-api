import express from 'express';
import {
  createAuthor,
  deleteAuthor,
  getAllAuthors,
  getAuthorById,
} from '../controllers/authorController.js';

const router = express.Router();

router.get('/', getAllAuthors);
router.get('/:id', getAuthorById);
router.post('/', createAuthor);
router.delete('/:id', deleteAuthor);

export default router;
