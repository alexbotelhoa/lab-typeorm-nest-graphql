import { Field, ObjectType } from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column, 
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
  
import Author from '../Author/author.entity';
import BookGenre from '../BookGenre/book-genre.entity';
  
@ObjectType()
@Entity({ name: 'books' })
export default class Book {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column({name: 'author_id'})
  authorId: number;

  @Field()
  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @Field()
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;

  @Field(() => Author)
  author: Author;

  // Associations
  @ManyToOne(() => Author, author => author.bookConnection, {primary: true})
  @JoinColumn({name: 'author_id'})
  authorConnection: Promise<Author>;

  @OneToMany(() => BookGenre, bookGenre => bookGenre.genre)
  genreConnection: Promise<BookGenre[]>;

}
