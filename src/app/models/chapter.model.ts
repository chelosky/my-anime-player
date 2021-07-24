import { ChapterObject } from "./interfaces/chapter-object.interface";
import { CHAPTER_OBJECT_TYPES } from '../constants/general.constants';

export class Chapter implements ChapterObject{

    constructor(
        public id: number,
        public code: string,
        public name: string,
        public url: string,
        public thumbnail: string,
        public season: number,
        public season_name?: string,
        public anime?: string,
    ){
        this.id = id;
        this.code = code;
        this.name = name;
        this.url = url;
        this.thumbnail = thumbnail;
        this.season = season;
        this.season_name = season_name;
        this.anime = anime;
    }

    getInformation(): string{
        return `EP: ${this.code} - TEMP: ${this.season}`
    }

    getType(): string{
        return CHAPTER_OBJECT_TYPES.chapter;
    }
}