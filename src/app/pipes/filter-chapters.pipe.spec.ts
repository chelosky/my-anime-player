import { FilterChaptersPipe } from './filter-chapters.pipe';
import { ARRAY_DUMMY, CHAPTER_DUMMY } from '../testing/service.factory';
import { ChapterObject } from '../models/interfaces/chapter-object.interface';

describe('Pipes: Filter Chapters', () => {

    let pipe: FilterChaptersPipe;

    beforeEach(() => {
        pipe = new FilterChaptersPipe();
    });

    it('#transform should return the same list when filter is null | void ', () => {
        let result: ChapterObject[] = pipe.transform(ARRAY_DUMMY, '', []);
        expect(result).toBe(ARRAY_DUMMY);
        result = pipe.transform(ARRAY_DUMMY, null, []);
        expect(result).toBe(ARRAY_DUMMY);
    });

    it('#transform should return the list filtered by a string', () => {
        let result: ChapterObject[] = pipe.transform(ARRAY_DUMMY, 'chapter', ['code']);
        expect(result.length).toBe(1);
        expect(result[0]).toEqual(CHAPTER_DUMMY);
    });
});
