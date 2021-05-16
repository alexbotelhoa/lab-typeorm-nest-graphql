import { Injectable } from '@nestjs/common';

import BookGenreModel from './book-genre.model';

@Injectable()
class BookGenreService extends BookGenreModel {
  
}

export default BookGenreService;
