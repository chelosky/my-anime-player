import { CHAPTER_DUMMY } from '../testing/service.factory';
import { CleanChapterNamePipe } from './clean-chapter-name.pipe';

describe('Pipes: Clean Chapter Name', () => {

    let pipe: CleanChapterNamePipe;

    beforeEach(() => {
        pipe = new CleanChapterNamePipe();
    });

    it('#transform should return the string name but validated', () => {
        let result: string = pipe.transform(CHAPTER_DUMMY.name, 'dbz');
        expect(result).toBe(CHAPTER_DUMMY.name);
        result = pipe.transform('001-Un-extraño-viene-de-chica.mp4', 'ranma');
        expect(result).toBe('Un extraño viene de chica');
    });

});
