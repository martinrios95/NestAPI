import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class BooksService {
  constructor() {
    this.books = [];
  }

  getAll() {
    return {
        code: 200,
        data: this.books,
        message: null,
    };
  }

  get(id){
    let book = this.books.find(b => b.id == id) || null;

    if (book == null){
        return {
            code: 404,
            message: "Book not found"
        };
    }

    return {
        code: 200,
        message: null,
        data: book
    };
  }

  add(addBook){
    let book = {
        id: randomUUID(),
        name: addBook.name,
        price: addBook.price,
        category: addBook.category,
        author: addBook.author,
    };

    this.books.push(book);

    return {
        code: 201,
        message: null,
    };
  }

  update(id, updateBook){
    let book = this.books.find(b => b.id == id) || null;

    if (book == null){
        return {
            code: 404,
            message: "Book not found"
        };
    }

    book.name = updateBook.name;
    book.price = updateBook.price;
    book.category = updateBook.category;
    book.author = updateBook.author;

    this.books.forEach((b, i) => { if (b.id == id) books[i] = book; });

    return {
        code: 200,
        message: null,
    };
  }

  delete(id){
    let book = this.books.find(b => b.id == id) || null;

    if (book == null){
        return {
            code: 404,
            message: "Book not found"
        };
    }

    this.books = this.books.filter(b => b.id != id);

    return {
        code: 200,
        message: null,
    };
  }
}