import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Manga } from "./Manga";
//  Genres Entity
@Entity('genres')
export class Genres {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    genres: string;
// perform a query of many to one for mangas
    @ManyToMany(() => Manga, manga => manga.genres)
    mangas: Manga[];
}