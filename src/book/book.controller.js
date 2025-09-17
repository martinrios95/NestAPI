import { Controller, Bind, Get, Body, Param, Post, Put, Req, Delete, HttpCode, Dependencies } from '@nestjs/common';
import { BooksService } from './book.service';

@Controller('books')
@Dependencies(BooksService)
export class BooksController {
    constructor(booksService){
        this.booksService = booksService;
    }

    @Get()
    @HttpCode(200)
    getAll() {
        return this.booksService.getAll();
    }

    @Get(':id')
    @HttpCode(200)
    @Bind(Param('id'))
    get(id) {
        return this.booksService.get(id);
    }

    @Post()
    @HttpCode(201)
    @Bind(Body())
    add(book) {
        return this.booksService.add(book);
    }

    // TODO: Bind on cleaner method
    @Put(':id')
    @HttpCode(200)
    @Bind(Req())
    update({params, body}) {
        return this.booksService.update(params.id, body);
    }

    @Delete(':id')
    @HttpCode(200)
    @Bind(Param('id'))
    delete(id) {
        return this.booksService.delete(id);
    }
}