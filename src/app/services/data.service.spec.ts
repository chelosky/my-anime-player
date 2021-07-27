import { HttpClient, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataService } from './data.service';
describe('Service: Data', () => {
    let service: DataService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);

        TestBed.configureTestingModule({
            providers: [
                DataService,
                { provide: HttpClient, useValue: spy }
            ]
        });
        service = TestBed.inject(DataService);
        httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    });

    it('#get should return defined value from a spy ', (done) => {
        const responseDummy = new HttpResponse({
            body: { data: '' },
            status: 200
        })
        httpClientSpy.get.and.returnValue(of(responseDummy));
        
        service.get('').subscribe((res) => {
            expect(res).toBe(responseDummy);
            done();
        });

        expect(httpClientSpy.get.calls.count()).toBe(1);
    });

    it('#put should return defined value from a spy ', (done) => {
        const responseDummy = new HttpResponse({
            body: { data: '' },
            status: 200
        })
        httpClientSpy.put.and.returnValue(of(responseDummy));
        
        service.put('', {}).subscribe((res) => {
            expect(res).toBe(responseDummy);
            done();
        });

        expect(httpClientSpy.put.calls.count()).toBe(1);
    });

    it('#post should return defined value from a spy ', (done) => {
        const responseDummy = new HttpResponse({
            body: { data: '' },
            status: 200
        })
        httpClientSpy.post.and.returnValue(of(responseDummy));
        
        service.post('', {}).subscribe((res) => {
            expect(res).toBe(responseDummy);
            done();
        });

        expect(httpClientSpy.post.calls.count()).toBe(1);
    });
})