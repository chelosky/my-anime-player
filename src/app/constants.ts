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

// CUSTOM ICONS
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

// TYPE OF LISTER CHAPTERS
export const CHAPTER_LIST_TYPE = 0;
export const CHAPTER_GRID_TYPE = 1;

// DEBOUNCE TIMER FOR SUBSCRIPTION
export const DEBOUNCE_TIME_PREDET_MS = 300;

// DIMENSIONES WINDOWS PX
export const DIMENSIONS: any = {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1400
}

// TYPE MODE SIDEBAR
export const SIDEBAR_MODE: any = {
    side: 'side',
    over: 'over',
    push: 'push'
}