import { AuthorsInterface } from "../../Interfaces/AuthorsInterface";

// Models for Authors
export class Authors implements AuthorsInterface {
    private _id: number;
    private _author: string;


    constructor(id: number, author: string) {
        this._id = id;
        this._author = author;
    }


    get id(): number {
        return this._id;
    }

    get author(): string {
        return this._author;
    }


    set id(value: number) {
        this._id = value;
    }

    set author(value: string) {
        this._author = value;
    }
}