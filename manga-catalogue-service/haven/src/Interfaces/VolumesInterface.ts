import { Volume } from "../Services/Database/Entity/Volume";

export interface VolumesInterface {
   id: number;
   manga_id: number;
   volume_number: number;
   volume_title: string;
   realease_date: Date;
}