import express from 'express';
import { createBook,findBooks, updateBooks, deleteBooks} from '../controllers/BookControllers.mjs';
const router = express.Router();
export default router;
router.post('/books/add',createBook);
router.get('/books',findBooks);
router.put('/books/update', updateBooks);
router.delete('books/delete', deleteBooks);