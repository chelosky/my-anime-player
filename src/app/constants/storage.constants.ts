import { Favorite } from '../models/interfaces/favorite.interface';
import { Ova } from '../models/ova.model';
import { ChapterObject } from '../models/interfaces/chapter-object.interface';
import { Chapter } from '../models/chapter.model';
import { Movie } from '../models/movie.model';

// FAVORITE CONSTANT
export const FAVORITE_KEY = 'my_anime_list_chelosky_favorites';

// WATCHED CONSTANT
export const WATCHED_KEY = 'my_anime_list_chelosky_watched';

// VIEW TYPE CHAPTERS
export const VIEW_TYPE_KEY = 'my_anime_list_chelosky_view_type';

// TYPE FAVORITE
export const FAVORITE_TYPES: any = {
    ova: {
        code: 'OVA',
        generate: (item: Favorite): ChapterObject => {
            return new Ova(item.id, item.code, item.name, item.url, item.thumbnail, item.anime);
        }
    },
    movie: {
        code: 'MOVIE',
        generate: (item: Favorite): ChapterObject => {
            return new Movie(item.id, item.code, item.name, item.url, item.thumbnail, item.anime);
        }
    },
    chapter: {
        code: 'CHAPTER',
        generate: (item: Favorite): ChapterObject => {
            return new Chapter(item.id, item.code, item.name, item.url, item.thumbnail, item.season, item.season_name, item.anime);
        }
    }
}