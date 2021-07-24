import { CustomSvgIcon } from '../models/interfaces/custom-svg-icon.interface';
import { ButtonGroup } from '../models/interfaces/button-group.interface';

export const APP_NAME = 'MY ANIME LIST';

export const API = 'https://www.cheloskyapi.xyz/'

export const ANIMES_INFO = {
    ranma: {
        name: 'Ranma ½',
        endpoint: 'ranma/data',
        get: (data: any) => {
            return data['body']['data'];
        },
        validName: (text: string): string => {
            //  001-Un-extraño-viene-de-chica.mp4 => [ 001-Un-extraño-viene-de-chica , mp4 ] 
            let nameExtensionSplit = text.split('.')
            // 001-Un-extraño-viene-de-chica => [Un,extraño,viene,de,chica]
            let nameCorrelativeSplit = nameExtensionSplit[0].split('-').slice(1);
            return nameCorrelativeSplit.join(' ');
        }
    },
    dbz: {
        name: 'Dragon Ball Z',
        endpoint: 'dbz/data',
        get: (data: any) => {
            return data['body'];
        },
        validName: (text: string): string => {
            // Aparece un mini Goku, su nombre es Gohan
            return text;
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

// TYPE CHAPTER OBJECT
export const CHAPTER_OBJECT_TYPES: any = {
    ova: 'ova',
    movie: 'movie',
    chapter: 'chapter'
}

export const BUTTON_TYPES: ButtonGroup[] = [
    {
      icon: 'grid_view',
      class: 'md-left',
      value: CHAPTER_GRID_TYPE
    },
    {
      icon: 'list',
      class: 'md-right',
      value: CHAPTER_LIST_TYPE
    }
];