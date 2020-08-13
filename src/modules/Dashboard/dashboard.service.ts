import { Injectable } from '@nestjs/common';

import BookService from '../Book/book.service';

@Injectable()
class DashboardService {

  constructor(
    private readonly bookService: BookService
  ) {}

  async getHello(): Promise<string> {
    return `Total de livros é ${await this.bookService.bookRepo.count()}`;
  }
  
}

export default DashboardService;
