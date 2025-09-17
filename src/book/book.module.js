import { Module, Dependencies } from '@nestjs/common';
import { BooksController } from './book.controller';
import { BooksService } from './book.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
})

@Dependencies(BooksService)
export class BooksModule {
  constructor(booksService) {
    this.booksService = booksService;
  }
}