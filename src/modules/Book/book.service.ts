import { Injectable } from '@nestjs/common';

import BookModel from './book.model';

@Injectable()
class BookService extends BookModel {

}

export default BookService;
