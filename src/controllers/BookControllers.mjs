import BookModels from '../models/BookModels.mjs';
const createBook = async (req, res) => {
    const data = req.body;
    const books = await BookModels.create(data);
    const resp = 'Book Added Successfully';
    return res.status(201).send({ Response: resp, message: books });
}
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
}
const deleteBooks = async (req, res) => {
    const id = req.query.id;
    const data = await bookModel.findByIdAndDelete({ _id: id });
    return res.status(200).send({ status: true, message: data });
}
const updateBooks = async (req, res) => {
    const id = req.query.id;
    const name = req.query.name;
    const updatedBook = await bookModel.findByIdAndUpdate({ _id: id }, { $set: { "title": name } });
    return res.status(200).send({ status: true, message: updatedBook })
}
export { createBook, findBooks, deleteBooks, updateBooks };