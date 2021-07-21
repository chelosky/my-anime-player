import { CustomSvgIcon } from './models/interfaces/custom-svg-icon.interface';

export const API = 'http://192.241.138.102:1337/'

export const ANIMES_INFO = {
    ranma: {
        name: 'Ranma ½',
        endpoint: 'ranma/data',
        get: (data) => {
            return data['body']['data'];
        }
    },
    dbz: {
        name: 'Dragon Ball Z',
        endpoint: 'dbz/data',
        get: (data) => {
            return data['body'];
        }
    }
}

export const SVG_ICONS: CustomSvgIcon[] = [
    {
        name: 'ranma',
        file: 'ranma.svg'
    },
    {
        name: 'goku',
        file: 'goku.svg'
    }
]

export const CHAPTER_LIST_TYPE = 0;
export const CHAPTER_GRID_TYPE = 1;