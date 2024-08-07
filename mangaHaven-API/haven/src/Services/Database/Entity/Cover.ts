import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Manga } from './Manga';

@Entity('cover') // Ensure this matches your database table name
export class Cover {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    url: string;

    @OneToMany(() => Manga, manga => manga.cover)
    mangas: Manga[];
}