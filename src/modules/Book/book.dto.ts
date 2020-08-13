import { Field, InputType } from 'type-graphql';

import AuthorDto from '../Author/author.dto';

@InputType()
class BookAuthorConnectDto {
  @Field()
  readonly id: number;
}

@InputType()
class BookAuthorDto {
  @Field({nullable: true})
  readonly connect: BookAuthorConnectDto;

  @Field({nullable: true})
  readonly create: AuthorDto;
}

@InputType()
class BookInput {
  @Field()
  readonly title: string;

  @Field()
  readonly author: BookAuthorDto;
}

export default BookInput;
