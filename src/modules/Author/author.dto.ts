import { Field, InputType } from 'type-graphql';

@InputType()
class AuthorDto {
  @Field({nullable: true})
  readonly id: number;
  
  @Field()
  readonly name: string;
}

export default AuthorDto;
