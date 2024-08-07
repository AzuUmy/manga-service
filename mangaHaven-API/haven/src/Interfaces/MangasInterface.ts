import { Author } from "../Services/Database/Entity/Author";
import { Cover } from "../Services/Database/Entity/Cover";
import { Genres } from "../Services/Database/Entity/Genres";

export interface mangasInterface {
    title: string;
    description: string;
    author: Author;
    genres: Genres[];
    url: Cover;
}