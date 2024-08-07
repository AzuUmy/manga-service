import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('author')
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'author' })
    name: string;
}