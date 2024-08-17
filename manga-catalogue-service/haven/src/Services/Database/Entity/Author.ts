import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('author')
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    author: string;
}