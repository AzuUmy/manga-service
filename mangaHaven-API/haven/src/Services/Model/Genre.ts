import { GenreInterface } from "../../Interfaces/GenreInterface";
import { Genres } from "../Database/Entity/Genres";

export class Genre implements GenreInterface {
    private _id: number;
    private _genres: Genres[];


    constructor(id: number, genres: Genres[]) {
        this._id = id;
        this._genres = genres;
    }


    get id(): number {
        return this._id;
    }

    get genres(): Genres[] {
        return this._genres;
    }


    set id(value: number) {
        this._id = value;
    }

    set genres(value: Genres[]) {
        this._genres = value;
    }
}

