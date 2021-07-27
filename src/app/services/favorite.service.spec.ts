import { TestBed } from '@angular/core/testing';
import { FavoriteService } from './favorite.service';
import { DatePipe } from '@angular/common';
import { StorageService } from './storage.service';
import { CHAPTER_DUMMY, OVA_DUMMY, MOVIE_DUMMY, ARRAY_DUMMY } from '../testing/service.factory';

describe('Service: Favorite', () => {
    let service: FavoriteService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                DatePipe,
                StorageService
            ]
        });
        service = TestBed.inject(FavoriteService);
    })

    afterEach(() => {
        service.clearFavorites();
    })

    it('#getFavorites should return a clear array of chapterobject ', () => {
        service.clearFavorites();
        expect(service.getFavorites()).toEqual([]);
        expect(service.getFavorites().length).toEqual(0);
    });

    it('#getFavorites should set a favorite Chapter type and return it', () => {
        service.setFavorite(CHAPTER_DUMMY);
        expect(service.getFavorites()).toEqual([CHAPTER_DUMMY]);
        expect(service.getFavorites().length).toEqual(1);
        expect(service.getFavorites()[0]).toEqual(CHAPTER_DUMMY);
        expect(service.getFavorites()[0].getType()).toEqual(CHAPTER_DUMMY.getType());
    });

    it('#getFavorites should set a favorite Ova type and return it', () => {
        service.setFavorite(OVA_DUMMY);
        expect(service.getFavorites()).toEqual([OVA_DUMMY]);
        expect(service.getFavorites().length).toEqual(1);
        expect(service.getFavorites()[0]).toEqual(OVA_DUMMY);
        expect(service.getFavorites()[0].getType()).toEqual(OVA_DUMMY.getType());
    });

    it('#getFavorites should set a favorite Movie type and return it', () => {
        service.setFavorite(MOVIE_DUMMY);
        expect(service.getFavorites()).toEqual([MOVIE_DUMMY]);
        expect(service.getFavorites().length).toEqual(1);
        expect(service.getFavorites()[0]).toEqual(MOVIE_DUMMY);
        expect(service.getFavorites()[0].getType()).toEqual(MOVIE_DUMMY.getType());
    });

    it('#getFavorites and #isDuplicated should set a new chapter n times and just save once (Not duplicity)', () => {
        const nTimes = 10;
        for (let index = 0; index < nTimes; index++) {
            service.setFavorite(CHAPTER_DUMMY);
            
        }
        expect(service.getFavorites()).toEqual([CHAPTER_DUMMY]);
        expect(service.getFavorites().length).toEqual(1);
    });

    it('#updateFavorites should set a new favorite array list', () => {
        service.updateFavorites(ARRAY_DUMMY);
        expect(service.getFavorites().length).toEqual(ARRAY_DUMMY.length);
        expect(service.getFavorites()).toEqual(ARRAY_DUMMY);
        expect(service.getFavorites()[0]).toEqual(ARRAY_DUMMY[0]);
        expect(service.getFavorites()[1]).toEqual(ARRAY_DUMMY[1]);
        expect(service.getFavorites()[2]).toEqual(ARRAY_DUMMY[2]);
    });

    it('#isFavorite should verify if a chapter is favorite', () => {
        service.setFavorite(CHAPTER_DUMMY);
        expect(service.isFavorite(CHAPTER_DUMMY)).toBeTruthy();
    });

    it('#isFavorite should verify if a chapter is not favorite', () => {
        service.removeFavorite(CHAPTER_DUMMY);
        expect(service.isFavorite(CHAPTER_DUMMY)).not.toBeTruthy();
    });

    it('#getHandle should recibe an undefined when favorite list changed', (done) => {
        service.getHandle().subscribe((res) => {
            expect(res).toBe(undefined);
            done();
        });
        service.setFavorite(CHAPTER_DUMMY);
        service.removeFavorite(CHAPTER_DUMMY);
        service.updateFavorites(ARRAY_DUMMY);
        service.clearFavorites();
    });

    it('##handleFavorite$ should inform the favorite list changed', () => {
        const spyTest = spyOn(service.getSubject(), 'next');
        service.setFavorite(CHAPTER_DUMMY);
        expect(spyTest).toHaveBeenCalledTimes(1);
        service.removeFavorite(CHAPTER_DUMMY);
        expect(spyTest).toHaveBeenCalledTimes(2);
        service.updateFavorites(ARRAY_DUMMY);
        expect(spyTest).toHaveBeenCalledTimes(3);
        service.clearFavorites();
        expect(spyTest).toHaveBeenCalledTimes(4);
    });

    it('#removeFavorite should remove a specific favorite', () => {
        service.setFavorite(CHAPTER_DUMMY);
        service.removeFavorite(CHAPTER_DUMMY);
        expect(service.isFavorite(CHAPTER_DUMMY)).toEqual(false);
    });
})