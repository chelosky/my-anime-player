import { VideoPlayerService } from './video-player.service';
import { ARRAY_DUMMY } from '../testing/service.factory';

describe('Service: Video-Player', () => {
    let service: VideoPlayerService;

    beforeEach(() => {
        service = new VideoPlayerService();
    });

    afterEach(() => {
        service.setVideoList([]);
    });

    it('#setVideoList should set a chapter list', () => {
        service.setVideoList(ARRAY_DUMMY);
        expect(service.getVideoList()).toEqual(ARRAY_DUMMY);
        expect(service.getVideoList().length).toEqual(ARRAY_DUMMY.length);
    });

    it('#getNextPrevious should return previous and next valid videos', () => {
        service.setVideoList(ARRAY_DUMMY);
        const response = service.getNextPrevious(ARRAY_DUMMY[1]);
        expect(response.previous).toEqual(ARRAY_DUMMY[0]);
        expect(response.next).toEqual(ARRAY_DUMMY[2]);
    });

    it('#getNextPrevious should return valid previous and not valid next videos', () => {
        service.setVideoList(ARRAY_DUMMY);
        const response = service.getNextPrevious(ARRAY_DUMMY[2]);
        expect(response.previous).toEqual(ARRAY_DUMMY[1]);
        expect(response.next).toEqual(null);
    });

    it('#getNextPrevious should return not valid previous and valid next videos', () => {
        service.setVideoList(ARRAY_DUMMY);
        const response = service.getNextPrevious(ARRAY_DUMMY[0]);
        expect(response.previous).toEqual(null);
        expect(response.next).toEqual(ARRAY_DUMMY[1]);
    });
})