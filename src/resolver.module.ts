import AuthorResolver from './modules/Author/author.resolver';
import BookResolver from './modules/Book/book.resolver';
import GenreResolver from './modules/Genre/genre.resolver';
import BookGenreResolver from './modules/BookGenre/book-genre.resolver';

const ResolverModule = [
    AuthorResolver,
    BookResolver,
    GenreResolver,
    BookGenreResolver,
];

export default ResolverModule;
