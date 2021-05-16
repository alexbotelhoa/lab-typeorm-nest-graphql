import { Field, ObjectType } from 'type-graphql';
import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne, 
  JoinColumn, 
  PrimaryGeneratedColumn,
} from 'typeorm';

import Book from '../Book/book.entity';
import Genre from '../Genre/genre.entity';

@ObjectType()
@Entity({ name: 'books_genres' })
export default class BookGenre {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @PrimaryColumn({name: 'book_id'})
  bookId: number;

  @Field()
  @PrimaryColumn({name: 'genre_id'})
  genreId: number;

  @Field()
  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @Field()
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;

  // Associations
  @ManyToOne(() => Book, book => book.genreConnection, {primary: true})
  @JoinColumn({name: 'book_id'})
  book: Promise<Book>;

  @ManyToOne(() => Genre,  genre => genre.bookConnection, {primary: true})
  @JoinColumn({name: 'genre_id'})
  genre: Promise<Genre>;
  
}
