

// DTO class to handle data structure for manga covers
export class MangasCover{
    id: number;
    title: string;
    cover: {
        id: number
        url: string
    }
}