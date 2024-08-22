// the genre in my interfacee is type Genre from my database Entity
import { Genres } from "../Services/Database/Entity/Genres";
// Interface fro genres
export interface GenreInterface {
    id: number;
    genres: Genres[];
}