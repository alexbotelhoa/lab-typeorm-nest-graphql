import { Injectable } from '@nestjs/common';

import BookService from './modules/Book/book.service';

@Injectable()
export class AppService {

  constructor(private readonly bookService: BookService) {

  }

  async getHello(): Promise<string> {
    return `Total books are ${await this.bookService.bookRepo.count()}`;
  }
}
