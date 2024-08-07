import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Author } from './Author';
import { Cover } from './Cover';

@Entity('mangas') // Ensure this matches your database table name
export class Manga {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ name: 'cover_id' })
    coverId: number;

    @ManyToOne(() => Author, author => author.id)
    @JoinColumn({ name: 'author_id' })
    author: Author;

    @ManyToOne(() => Cover, { nullable: true })
    @JoinColumn({ name: 'cover_id' }) // Ensure this matches your database column name
    cover: Cover;
}