export const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

export const arrayToStringJoin = (array: any[], char: string = ',') =>{
    return array.join(char);
}

export const numOr0 = n => isNaN(n) ? 0 : Number(0);

export const delayMS = (ms: number) => {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

export const capitalizeString = (value: string) => {
    return value[0].toUpperCase() + value.slice(1).toLocaleLowerCase();
}