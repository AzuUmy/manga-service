export class Categories {

    private _genre_id: number;
    private _manga_id: number;


    constructor(genre_id: number, manga_id: number) {
        this._genre_id = genre_id;
        this._manga_id = manga_id;
    }

    //Getters
    get genre_id(): number {
        return this._genre_id;
    }

    get manga_id(): number {
        return this._manga_id;
    }

    //Setters
    set genre_id(value: number) {
        this._genre_id = value;
    }

    set manga_id(value: number) {
        this._manga_id = value;
    }
}