import { Field, InputType } from 'type-graphql';

@InputType()
class GenreBookInput {
  @Field()
  readonly genreId: number;
  
  @Field()
  readonly bookId: number;
}

export default GenreBookInput;
