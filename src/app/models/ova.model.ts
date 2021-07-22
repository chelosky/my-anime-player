import { ChapterObject } from './interfaces/chapter-object.interface';
export class Ova implements ChapterObject{

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

    getInformation(): string {
        return `NUM: ${this.id}`;
    }
}