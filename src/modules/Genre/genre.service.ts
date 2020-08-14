import { Injectable } from '@nestjs/common';

import GenreModel from './genre.model';

@Injectable()
class GenreService extends GenreModel {

}

export default GenreService;
