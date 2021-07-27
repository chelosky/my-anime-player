import { TestBed } from '@angular/core/testing';
import { WatchedService } from './watched.service';
import { StorageService } from './storage.service';
import { CHAPTER_DUMMY, OVA_DUMMY, MOVIE_DUMMY } from '../testing/service.factory';

describe('Service: Watched', () => {
    let service: WatchedService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                StorageService
            ]
        });
        service = TestBed.inject(WatchedService);
    });

    afterEach(() => {
        service.clearWatched();
    });

    it('#getWatched should set a watched Chapter type and return it', () => {
        service.setWatched(CHAPTER_DUMMY);
        expect(service.getWatched()[0].anime).toEqual(CHAPTER_DUMMY.anime);
        expect(service.getWatched()[0].code).toEqual(CHAPTER_DUMMY.code);
        expect(service.getWatched().length).toEqual(1);
    });

    it('#getWatched should set a watched Ova type and return it', () => {
        service.setWatched(OVA_DUMMY);
        expect(service.getWatched()[0].anime).toEqual(OVA_DUMMY.anime);
        expect(service.getWatched()[0].code).toEqual(OVA_DUMMY.code);
        expect(service.getWatched().length).toEqual(1);
    });

    it('#getWatched should set a watched Movie type and return it', () => {
        service.setWatched(MOVIE_DUMMY);
        expect(service.getWatched()[0].anime).toEqual(MOVIE_DUMMY.anime);
        expect(service.getWatched()[0].code).toEqual(MOVIE_DUMMY.code);
        expect(service.getWatched().length).toEqual(1);
    });


    it('#getWatched and #isDuplicated should set a new chapter is watched n times and just save once (Not duplicity)', () => {
        const nTimes = 10;
        for (let index = 0; index < nTimes; index++) {
            service.setWatched(CHAPTER_DUMMY);
            
        }
        expect(service.getWatched().length).toEqual(1);
        expect(service.getWatched()[0].anime).toEqual(CHAPTER_DUMMY.anime);
        expect(service.getWatched()[0].code).toEqual(CHAPTER_DUMMY.code);
    });

    it('#isWatched should verify if a chapter is watched', () => {
        service.setWatched(CHAPTER_DUMMY);
        expect(service.isWatched(CHAPTER_DUMMY)).toBeTruthy();
    });

    it('#isWatched should verify if a chapter is not watched', () => {
        service.removeWatched(CHAPTER_DUMMY);
        expect(service.isWatched(CHAPTER_DUMMY)).not.toBeTruthy();
    });

    it('#getHandle should recibe an undefined when watched list changed', (done) => {
        service.getHandle().subscribe((res) => {
            expect(res).toBe(undefined);
            done();
        });
        service.setWatched(CHAPTER_DUMMY);
        service.removeWatched(CHAPTER_DUMMY);
        service.clearWatched();
    });

    it('##handleWatched$ should inform the watched list changed', () => {
        const spyTest = spyOn(service.getSubject(), 'next');
        service.setWatched(CHAPTER_DUMMY);
        expect(spyTest).toHaveBeenCalledTimes(1);
        service.removeWatched(CHAPTER_DUMMY);
        expect(spyTest).toHaveBeenCalledTimes(2);
        service.clearWatched();
        expect(spyTest).toHaveBeenCalledTimes(3);
    });

    it('#removeWatched should remove a specific chapter', () => {
        service.setWatched(CHAPTER_DUMMY);
        service.removeWatched(CHAPTER_DUMMY);
        expect(service.isWatched(CHAPTER_DUMMY)).toEqual(false);
    });
})