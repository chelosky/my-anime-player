import { Chapter } from "src/app/models/chapter.model";
import { ChapterObject } from "src/app/models/interfaces/chapter-object.interface";
import { Movie } from "src/app/models/movie.model";
import { Ova } from "src/app/models/ova.model";

const chapter_identify = 'Chapter 1';
const ova_identify = 'Ova 1';
const movie_identify = 'Movie 1';

export const CHAPTER_DUMMY: Chapter = new Chapter(1,chapter_identify,chapter_identify,chapter_identify,chapter_identify,1,chapter_identify,chapter_identify);
export const OVA_DUMMY: Ova = new Ova(1,ova_identify,ova_identify,ova_identify,ova_identify,ova_identify);
export const MOVIE_DUMMY: Movie = new Movie(1,movie_identify,movie_identify,movie_identify,movie_identify,movie_identify);
export const ARRAY_DUMMY: ChapterObject[] = [CHAPTER_DUMMY, OVA_DUMMY, MOVIE_DUMMY];

export const BODY_RESPONSE_ANIME = {
    chapters: [
        {
            ...CHAPTER_DUMMY
        }
    ],
    ovas: [
        {
            ...OVA_DUMMY
        }
    ],
    movies: [
        {
            ...MOVIE_DUMMY
        }
    ]
};