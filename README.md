
# Book Management Application

This project is a Book Management Application built with ExpressJS and MongoDB. It provides a RESTful API for managing a collection of books. The application accepts queries via Postman and stores the data in MongoDB. 

## Installation

1. Clone the repository:
   ```
   git clone <repository_url>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up MongoDB:
   - Create a MongoDB Atlas account and set up a cluster.
   - Replace the MongoDB connection string in the code with your own connection string.

## Usage

To start the server, run the following command:

```
npm start
```

The server will start on port 9000 by default. You can access the API endpoints to perform CRUD operations on the book collection.

## API Endpoints

- `POST /books/add`: Add a new book
- `GET /books`: Get all books
- `PUT /books/update`: Update a book
- `DELETE /books/delete`: Delete a book

## Libraries and Methods

- **ExpressJS**: Used for building the server and handling HTTP requests.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward schema-based solution to model application data.
- **Node.js**: JavaScript runtime used for building scalable network applications.

## Controllers

The controller functions for handling the CRUD operations are located in `BookControllers.mjs`. You can customize these functions as needed for your application logic.

## Models

The book model schema is defined in `BookModels.mjs`. It includes fields such as title, author, genre, ISBN, and availability.

## Dependencies

- express
- mongoose

# **Code Snippets**

```javascript
// index.js
import express from 'express';
import mongoose from 'mongoose';
import router from '../src/routes/BookRoutes.mjs';

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb+srv://sharadsingh0203:sharad%40%400209%40%400203@cluster0.xogxrhv.mongodb.net/BooksData")
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err));

app.use('/', router);

app.listen(9000, () => {
  console.log('Server Started on port:', 9000);
});
```

```javascript
// BookRoutes.mjs
import express from 'express';
import { createBook, findBooks, updateBooks, deleteBooks } from '../controllers/BookControllers.mjs';

const router = express.Router();

router.post('/books/add', createBook);
router.get('/books', findBooks);
router.put('/books/update', updateBooks);
router.delete('/books/delete', deleteBooks);

export default router;
```

```javascript
// BookControllers.mjs
import BookModels from '../models/BookModels.mjs';

const createBook = async (req, res) => {
    const data = req.body;
    const books = await BookModels.create(data);
    const resp = 'Book Added Successfully';
    return res.status(201).send({ Response: resp, message: books });
};

const findBooks = async (req, res) => {
    const names = req.query.names;
    const books = await BookModels.find({ title: names });
    let message;
    if (books.length === 0) {
        message = "Apologies! No Books Found";
    } else {
        message = "Ohh yeah! Found the Book";
    }
    res.status(200).send({ Response: message, Data: books });
};

const deleteBooks = async (req, res) => {
    const id = req.query.id;
    const data = await BookModels.findByIdAndDelete({ _id: id });
    return res.status(200).send({ status: true, message: data });
};

const updateBooks = async (req, res) => {
    const id = req.query.id;
    const name = req.query.name;
    const updatedBook = await BookModels.findByIdAndUpdate({ _id: id }, { $set: { "title": name } });
    return res.status(200).send({ status: true, message: updatedBook });
};

export { createBook, findBooks, deleteBooks, updateBooks };
```

```javascript
// BookModels.mjs
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    ISBN: String,
    availability: Boolean
},{timestamps:true}); 

export default mongoose.model('bookData', bookSchema);
```


## License

[MIT](https://choosealicense.com/licenses/mit/)
