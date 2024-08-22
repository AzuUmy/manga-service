import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Author } from './Author';
import { Cover } from './Cover';
import { Genres } from './Genres';
import { Volume } from './Volume';
//Mangas Entity

/* This entity represents the manga table in database, this entity is responsible for perfoming
the most important query, as is one of the aplication nucle */
@Entity('mangas')
export class Manga {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ name: 'cover_id' })
    coverId: number;

    // stablishes relations to other tables
    @ManyToOne(() => Author, author => author.id)
    @JoinColumn({ name: 'author_id' })
    author: Author;

    @ManyToOne(() => Cover, { nullable: true })
    @JoinColumn({ name: 'cover_id' })
    cover: Cover;

    @ManyToMany(() => Genres, genre => genre.mangas)
    @JoinTable({
        name: 'categories',
        joinColumn: {
            name: 'manga_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'genre_id',
            referencedColumnName: 'id'
        }
    })
    genres: Genres[];

    @OneToMany(() => Volume, volumes => volumes.manga)
    volumes: Volume[];
}