import { Field, InputType } from 'type-graphql';

@InputType()
class GenreDto {
  @Field()
  readonly name: string;
}

export default GenreDto;
