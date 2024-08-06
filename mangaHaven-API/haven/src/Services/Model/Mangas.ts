export class Mangas {
    private _title: string;
    private _description: string;
    private _author: string;
    private _genres: string; // Adjust type to match the database schema
    private _url: string;

    constructor(title: string, description: string, author: string, genres: string, url: string) {
        this._title = title;
        this._description = description;
        this._author = author;
        this._genres = genres;
        this._url = url;
    }

    // Getters
    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get author(): string {
        return this._author;
    }

    get genres(): string {
        return this._genres;
    }

    get url(): string {
        return this._url;
    }

    // Setters
    set title(value: string) {
        this._title = value;
    }

    set description(value: string) {
        this._description = value;
    }

    set author(value: string) {
        this._author = value;
    }

    set genres(value: string) {
        this._genres = value;
    }

    set url(value: string) {
        this._url = value;
    }
}