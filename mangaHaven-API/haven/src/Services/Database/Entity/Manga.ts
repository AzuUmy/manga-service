import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Manga {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    author: string;

    @Column("text")
    genres: string; // Use "text" for large text fields, or use a JSON type if available.

    @Column()
    url: string;
}