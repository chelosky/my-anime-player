import { StorageService } from './storage.service';
describe('Service: Storage', () => {

    let service: StorageService;
    let dummyKey: string = 'TEST_STORAGE_CHELOSKY';
    let dummyData: any = {
        id: 1,
        name: 'chelosky'
    };

    beforeEach(() => {
        service = new StorageService();
    });

    afterEach(() => {
        service.remove(dummyKey);
    });

    it('#store : save data in local storage with a key to identify it', () => {
        service.store(dummyKey, dummyData);
        const data = service.retrieve(dummyKey);
        expect(data).toBeTruthy();
        expect(data.id).toEqual(dummyData.id);
        expect(data.name).toEqual(dummyData.name);
    });

    it('#retrieve : get valid data in local storage', () => {
        service.store(dummyKey, dummyData);
        const data = service.retrieve(dummyKey);
        expect(data).toBeTruthy();
        expect(data.id).toEqual(dummyData.id);
        expect(data.name).toEqual(dummyData.name);
    });

    it('#retrieve : get not valid data in local storage',() => {
        const data = service.retrieve('NOT_VALID_NOT_EXIST_NOT_VALUE_KEY');
        expect(data).toBeUndefined();
    });

    it('#remove : remove data in local storage', () => {
        service.store(dummyKey, dummyData);
        service.remove(dummyKey);
        const data = service.retrieve(dummyKey);
        expect(data).toBeUndefined();
    });
})