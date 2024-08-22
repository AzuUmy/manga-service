import { Author } from "../Database/Entity/Author";
import { Cover } from "../Database/Entity/Cover";
import { Genre } from "./Genre";
import { Genres } from "../Database/Entity/Genres";
import { Volume } from "../Database/Entity/Volume";
import { mangasInterface } from "../../Interfaces/MangasInterface";
// Models for Mangas
export class Mangas extends Genre implements mangasInterface {
    private _title: string;
    private _description: string;
    private _author: Author;
    private _cover: Cover;
    private _volumes: Volume[];

    constructor(title: string,
                description: string, author: Author, 
                cover: Cover,   id: number, genres: Genres[], volumes: Volume[] ) {
        super(id, genres);
        this._title = title;
        this._description = description;
        this._author = author;
        this._cover = cover;
        this._volumes = volumes;
    }

    // Getters
    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get author(): Author {
        return this._author;
    }

    get url(): Cover {
        return this._cover;
    }

    get genres(): Genres[] {
        return super.genres;
    }

    get volumes(): Volume[] {
        return this._volumes;
    }

    // Setters
    set title(value: string) {
        this._title = value;
    }

    set description(value: string) {
        this._description = value;
    }

    set author(value: Author) {
        this._author = value;
    }


    set url(value: Cover) {
        this._cover = value;
    }

    set genres(value: Genres[]) {
        super.genres = value;
    }

    set volumes(value: Volume[]) {
        this._volumes = value;
    }


    // this edit the way the json file is displayed when reequesting the body for better readability
    toJSON(): object {
        return {
            title: this.title,
            description: this.description,
            author: this.author.author,
            coverUrl: this.url.url,
            genres: this.genres,
            volumes: this.volumes
        };
    }
}