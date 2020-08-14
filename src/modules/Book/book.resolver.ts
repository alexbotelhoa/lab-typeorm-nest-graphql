import { 
  Args, 
  Mutation, 
  Parent, 
  Query, 
  ResolveProperty, 
  Resolver 
} from '@nestjs/graphql';

import Author from '../Author/author.entity';
import AuthorService from '../Author/author.service';

import Book from './book.entity';
import BookDto from './book.dto';
import BookService from './book.service';

@Resolver(Book)
class BookResolver {

  constructor(
    private readonly authorService: AuthorService,
    private readonly bookService: BookService
  ) {}

  @Query(() => [Book])
  public async books(): Promise<Book[]> {
    return this.bookService.bookRepository.find();
  }
  @Query(() => Book, {nullable: true})
  public async book(@Args('id') id: number): Promise<Book> {
    return this.bookService.bookRepository.findOne({where: {id}});
  }

  @Mutation(() => Book)
  public async createBook(@Args('data') input: BookDto): Promise<Book> {
    const book = new Book();
    
    book.title = input.title;

    if (input.author.connect) {
      book.authorId = input.author.connect.id;
    } else {
      if (!input.author.create) {
        throw new Error('Either pass a valid author id for the book or provide a new author using the create input option');
      }
      const authorToSave = this.authorService.authorRepository.create({name: input.author.create.name});
      const savedAuthor = await this.authorService.authorRepository.save(authorToSave);
      book.authorId = savedAuthor.id;
    }

    return this.bookService.bookRepository.save(book);
  }

  @ResolveProperty()
  public async author(@Parent() parent): Promise<Author> {
    return this.authorService.authorRepository.findOne(parent.authorId);
  }
  
}

export default BookResolver;
