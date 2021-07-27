import { TestBed } from '@angular/core/testing';
import { ResizeService } from './resize.service';

describe('Service: Resize', () => {
    let service: ResizeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ResizeService
            ]
        });
        service = TestBed.inject(ResizeService);
    });

    it('##currentSize$ should inform the size changed', () => {
        const spyTest = spyOn(service.getSubject(), 'next');
        service.setSize(0);
        expect(spyTest).toHaveBeenCalledTimes(1);
        expect(service.currentSize).toEqual(0);
        service.setSize(20);
        expect(spyTest).toHaveBeenCalledTimes(2);
        expect(service.currentSize).toEqual(20);
        service.setSize(30);
        expect(spyTest).toHaveBeenCalledTimes(3);
        expect(service.currentSize).toEqual(30);
    });

    it('#getSize should recibe an number|string when sized was changed', (done) => {
        const valueTest= 3000;
        service.getSize().subscribe((res) => {
            expect(res).toBe(valueTest);
            done();
        });
        service.setSize(valueTest);
    })
})