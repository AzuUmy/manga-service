import { GenreInterface } from "../../Interfaces/GenreInterface";

export class Categories {
    private _id: number;
    private _genres: string;


    constructor(id: number, genres: string) {
        this._id = id;
        this._genres = genres;
    }


    get id(): number {
        return this._id;
    }

    get genres(): string {
        return this._genres;
    }


    set id(value: number) {
        this._id = value;
    }

    set genres(value: string) {
        this._genres = value;
    }
}