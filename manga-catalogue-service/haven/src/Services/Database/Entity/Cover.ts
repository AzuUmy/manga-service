import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Manga } from './Manga';

// Cover Entity
@Entity('cover')
export class Cover {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    url: string;

    // this permonf a query of one to many for mangas
    @OneToMany(() => Manga, manga => manga.cover)
    mangas: Manga[];
}