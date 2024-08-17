import { Genres } from "../Services/Database/Entity/Genres";

export interface GenreInterface {
    id: number;
    genres: Genres[];
}