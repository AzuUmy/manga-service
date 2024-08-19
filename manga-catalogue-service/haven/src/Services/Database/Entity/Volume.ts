import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Manga } from "./Manga";

@Entity('volumes')
export class Volume {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({ type: 'int'})
   manga_id: number;

   @Column({ type: 'int'})
   volume_number: number;

   @Column({ type: 'varchar', length: 255})
   volume_title: string;

   @Column({ type: 'date'})
   realease_date: Date;

   @ManyToOne(() => Manga, manga => manga.volumes)
   @JoinColumn({ name: 'manga_id' })
   manga: Manga;

}