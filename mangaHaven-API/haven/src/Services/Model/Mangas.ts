import {Author} from "../Database/Entity/Author";
import {Cover} from "../Database/Entity/Cover";

export class Mangas {
    private _title: string;
    private _description: string;
    private _author: Author; // Change type to Author
    private _cover: Cover;

    constructor(title: string, description: string, author: Author, cover: Cover) {
        this._title = title;
        this._description = description;
        this._author = author;
        this._cover = cover;
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
}