import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity('categories')
export class Categorie {

    @Column({type: 'int'})
    genre_id: number;

    @Column({type: 'int'})
    manga_id: number;

}