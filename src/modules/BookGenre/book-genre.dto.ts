import { Field, InputType } from 'type-graphql';

@InputType()
class GenreBookDto {
  @Field()
  readonly genreId: number;
  
  @Field()
  readonly bookId: number;
}

export default GenreBookDto;
