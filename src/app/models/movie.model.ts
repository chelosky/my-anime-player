import { ChapterObject } from './interfaces/chapter-object.interface';
export class Movie implements ChapterObject{
    
    constructor(
        public id: number,
        public code: string,
        public name: string,
        public url: string,
        public thumbnail: string

    ){
        this.id = id;
        this.code = code;
        this.name = name;
        this.url = url;
        this.thumbnail = thumbnail;
    }

    getInformation(): string{
        return `CÓDIGO: ${this.code}`
    }
}