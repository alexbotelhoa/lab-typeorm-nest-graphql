import { genreBooksLoader } from '../Loaders/books.loader';

export interface IGraphQLContext {
  genreBooksLoader: ReturnType<typeof genreBooksLoader>;
}