import { TestBed } from '@angular/core/testing';
import { SettingsService } from './settings.service';
import { StorageService } from './storage.service';
import { CHAPTER_GRID_TYPE, CHAPTER_LIST_TYPE } from '../constants/general.constants';
import { FavoriteService } from './favorite.service';
import { WatchedService } from './watched.service';
import { DatePipe } from '@angular/common';

describe('Service: Settings', () => {
    let service: SettingsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                StorageService,
                DatePipe
            ]
        });
        service = TestBed.inject(SettingsService);
    });

    afterEach(() => {
        service.removeAllData();
    });

    it('#getType should return CHAPTER_GRID_TYPE as default value', () => {
        expect(service.getType()).toEqual(CHAPTER_GRID_TYPE);
    });

    it('#getType should set a new chapter view type', () => {
        service.setType(CHAPTER_GRID_TYPE);
        expect(service.getType()).toEqual(CHAPTER_GRID_TYPE);
    });

    it('#removeAllData should remove data of favorites and watched chapters', ()=> {
        service.removeAllData();
        const favoriteService = TestBed.inject(FavoriteService);
        const watchedService = TestBed.inject(WatchedService);
        expect(favoriteService.getFavorites().length).toEqual(0);
        expect(watchedService.getWatched().length).toEqual(0);
    })
})