import { ChapterObject } from "./interfaces/chapter-object.interface";

export class Chapter implements ChapterObject{

    constructor(
        public id: number,
        public code: string,
        public name: string,
        public url: string,
        public thumbnail: string,
        public season: number,
        public season_name?: string,
    ){
        this.id = id;
        this.code = code;
        this.name = name;
        this.url = url;
        this.thumbnail = thumbnail;
        this.season = season;
        this.season_name = season_name;
    }

    getInformation(): string{
        return `EP: ${this.code} - TEMP: ${this.season}`
    }
}