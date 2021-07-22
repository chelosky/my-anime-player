export interface ChapterObject {

    id: number;
    code: string;
    name: string;
    url: string;
    thumbnail: string;
    anime?: string;
    season?: number;
    season_name?: string;

    getInformation(): string;
}
