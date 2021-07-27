import { TestBed } from '@angular/core/testing';
import { AnimeService } from './anime.service';
import { DataService } from './data.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { MOVIE_DUMMY, CHAPTER_DUMMY, OVA_DUMMY, BODY_RESPONSE_ANIME } from '../testing/service.factory';
import { Chapter } from '../models/chapter.model';
import { Ova } from '../models/ova.model';
import { Movie } from '../models/movie.model';

describe('Service: Anime', () => {
    let service: AnimeService;
    let dataSpy: jasmine.SpyObj<DataService>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('DataService', ['get', 'post']);
        TestBed.configureTestingModule({
            providers: [
                AnimeService,
                HttpClient,
                { provide: DataService, useValue: spy }
            ]
        });
        service = TestBed.inject(AnimeService);
        dataSpy = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    });

    it('#getAnimeData should get data of an anime - chapters', (done) => {
        const requestParams = { anime: 'dbz', props: 'chapters' }
        const responseDummy = new HttpResponse({
            status: 200,
            body: {
                ...BODY_RESPONSE_ANIME
            }
        });
        dataSpy.get.and.returnValue(of(responseDummy));
        service.getAnimeData(requestParams.anime, requestParams.props).subscribe((res) => {
            expect(res).toEqual([ new Chapter(CHAPTER_DUMMY.id, 
                                              CHAPTER_DUMMY.code,
                                              CHAPTER_DUMMY.name,
                                              CHAPTER_DUMMY.url,
                                              CHAPTER_DUMMY.thumbnail,
                                              CHAPTER_DUMMY.season, 
                                              CHAPTER_DUMMY.season_name, 
                                              requestParams.anime
                                        )
                            ]);
            done();
        });
        expect(dataSpy.get.calls.count()).toBe(1);
    });

    it('#getAnimeData should get data of an anime - chapters (ranma) ', (done) => {
        const requestParams = { anime: 'ranma', props: 'chapters' }
        const responseDummy = new HttpResponse({
            status: 200,
            body: {
                data: {
                    ...BODY_RESPONSE_ANIME
                }
            }
        });
        dataSpy.get.and.returnValue(of(responseDummy));
        service.getAnimeData(requestParams.anime, requestParams.props).subscribe((res) => {
            expect(res).toEqual([ new Chapter(CHAPTER_DUMMY.id, 
                                              CHAPTER_DUMMY.code,
                                              CHAPTER_DUMMY.name,
                                              CHAPTER_DUMMY.url,
                                              CHAPTER_DUMMY.thumbnail,
                                              CHAPTER_DUMMY.season, 
                                              CHAPTER_DUMMY.season_name, 
                                              requestParams.anime
                                        )
                            ]);
            done();
        });
        expect(dataSpy.get.calls.count()).toBe(1);
    });

    it('#getAnimeData should get data of an anime - ovas', (done) => {
        const requestParams = { anime: 'dbz', props: 'ovas' }
        const responseDummy = new HttpResponse({
            status: 200,
            body: {
                ...BODY_RESPONSE_ANIME
            }
        });
        dataSpy.get.and.returnValue(of(responseDummy));
        service.getAnimeData(requestParams.anime, requestParams.props).subscribe((res) => {
            expect(res).toEqual([ new Ova(OVA_DUMMY.id, 
                                          OVA_DUMMY.code,
                                          OVA_DUMMY.name,
                                          OVA_DUMMY.url,
                                          OVA_DUMMY.thumbnail,
                                          requestParams.anime
                                        )
                            ]);
            done();
        });
        expect(dataSpy.get.calls.count()).toBe(1);
    });

    it('#getAnimeData should get data of an anime - movies', (done) => {
        const requestParams = { anime: 'dbz', props: 'movies' }
        const responseDummy = new HttpResponse({
            status: 200,
            body: {
                ...BODY_RESPONSE_ANIME
            }
        });
        dataSpy.get.and.returnValue(of(responseDummy));
        service.getAnimeData(requestParams.anime, requestParams.props).subscribe((res) => {
            expect(res).toEqual([ new Movie(MOVIE_DUMMY.id, 
                                            MOVIE_DUMMY.code,
                                            MOVIE_DUMMY.name,
                                            MOVIE_DUMMY.url,
                                            MOVIE_DUMMY.thumbnail,
                                            requestParams.anime
                                        )
                            ]);
            done();
        });
        expect(dataSpy.get.calls.count()).toBe(1);
    });

    it('#generateDirectDownloadLink should generate the download link of chapter', (done) => {
        const responseDummy = new HttpResponse({
            status: 200,
            body: {
                responseLink: 'www.test.com'
            }
        });
        dataSpy.post.and.returnValue(of(responseDummy));
        service.generateDirectDownloadLink(CHAPTER_DUMMY).subscribe((res) => {
            expect(res).toBe(responseDummy.body);
            done();
        });
        expect(dataSpy.post.calls.count()).toBe(1);
    });
})