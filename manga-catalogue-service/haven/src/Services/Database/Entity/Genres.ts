import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Manga } from "./Manga";

@Entity('genres')
export class Genres {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    genres: string;

    @ManyToMany(() => Manga, manga => manga.genres)
    mangas: Manga[];
}