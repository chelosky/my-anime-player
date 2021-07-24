import { ChapterObject } from './interfaces/chapter-object.interface';
import { CHAPTER_OBJECT_TYPES } from '../constants/general.constants';
export class Movie implements ChapterObject{
    
    constructor(
        public id: number,
        public code: string,
        public name: string,
        public url: string,
        public thumbnail: string,
        public anime?: string
    ){
        this.id = id;
        this.code = code;
        this.name = name;
        this.url = url;
        this.thumbnail = thumbnail;
        this.anime = anime;
    }

    getInformation(): string{
        return `CÓDIGO: ${this.code}`
    }

    getType(): string{
        return CHAPTER_OBJECT_TYPES.movie;
    }
}