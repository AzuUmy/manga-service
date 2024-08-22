// authorss,genres and url recives as parameters theey corresponded entity
import { Author } from "../Services/Database/Entity/Author";
import { Cover } from "../Services/Database/Entity/Cover";
import { Genres } from "../Services/Database/Entity/Genres";

//Mangas interface
export interface mangasInterface {
    title: string;
    description: string;
    author: Author;
    genres: Genres[];
    url: Cover;
}