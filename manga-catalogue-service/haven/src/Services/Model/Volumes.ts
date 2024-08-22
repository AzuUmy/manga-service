import { VolumesInterface } from "../../Interfaces/VolumesInterface";
// Models for Volumes
export class Volumes implements VolumesInterface {
   private _id: number;
   private _manga_id: number;
   private _volume_number: number;
   private _volume_title: string;
   private _realease_date: Date;

   constructor(id: number, manga_id: number, volume_number: number, volume_title: string, realease_date: Date) {
       this._id = id;
       this._manga_id = manga_id;
       this._volume_number = volume_number;
       this._volume_title = volume_title;
       this._realease_date = realease_date;
   }

   //Getters 
   get id(): number {
      return this._id;
  }

  get manga_id(): number {
      return this._manga_id;
  }

  get volume_number(): number {
      return this._volume_number;
  }

  get volume_title(): string {
      return this._volume_title;
  }

  get realease_date(): Date {
      return this._realease_date;
  }

   //setters  
   set manga_id(value: number) {
      this._manga_id = value;
   }

   set volume_number(value: number) {
      this._volume_number = value;
   }

   set volume_title(value: string) {
      this._volume_title = value;
   }

   set id(value: number) {
      this._id = value;
   }

  set realease_date(value: Date) {
      this._realease_date = value;
  }

}