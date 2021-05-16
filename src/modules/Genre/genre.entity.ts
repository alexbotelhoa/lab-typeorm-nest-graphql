import { Field, ObjectType } from 'type-graphql';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany, 
  PrimaryGeneratedColumn,
} from 'typeorm';
  
import Book from '../Book/book.entity';
import BookGenre from '../BookGenre/book-genre.entity';
  
@ObjectType()
@Entity({ name: 'genres' })
export default class Genre {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({name: 'genre_name'})
  name: string;

  @Field()
  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @Field()
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;

  @Field(() => [Book], {nullable: true})
  book: Book[];

  // Associations
  @OneToMany(() => BookGenre, bookGenre => bookGenre.book)
  bookConnection: Promise<BookGenre[]>;

}
