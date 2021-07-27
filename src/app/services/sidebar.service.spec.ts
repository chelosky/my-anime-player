import { SidebarService } from './sidebar.service';
import { ResizeService } from './resize.service';
import { TestBed } from '@angular/core/testing';
import { DIMENSIONS, SIDEBAR_MODE } from '../constants/general.constants';
describe('Service: Sidebar', () => {
    let service: SidebarService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ResizeService,
                SidebarService
            ]
        });
        service = TestBed.inject(SidebarService);
    });

    it('#getMenu should return menu of sidebar', () => {
        expect(service.getMenu()).toBeDefined();
    });

    it('#getExtra should return extra menu of sidebar', () => {
        expect(service.getExtra()).toBeDefined();
    });

    it('#clickOutsideMobile change status of sidebar mode with a shorter than sm screen', () => {
        const resize = TestBed.inject(ResizeService);
        resize.setSize(DIMENSIONS.sm);
        service.clickOutsideMobile();
        expect(service.openSideBar).toBe(false);
        expect(service.modeSideBar).toBe(SIDEBAR_MODE.side);
    });

    it('#clickOutsideMobile change status of sidebar mode with a greater than sm screen', () => {
        const resize = TestBed.inject(ResizeService);
        resize.setSize(DIMENSIONS.sm + 1);
        service.clickOutsideMobile();
        expect(service.openSideBar).toBe(false);
        expect(service.modeSideBar).toBe(SIDEBAR_MODE.side);
    });

    it('#changeModeSideBar change status of sidebar mode with a shorter than sm screen and open sidebar', () => {
        const resize = TestBed.inject(ResizeService);
        resize.setSize(DIMENSIONS.sm - 100);
        service.openSideBar = true;
        service.changeModeSideBar();
        expect(service.modeSideBar).toBe(SIDEBAR_MODE.over);
    });

})