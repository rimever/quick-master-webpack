let message = 'Hello,webpack!';

export const APP_NAME = 'Quik Master Webpack';

export function hello() {
    console.log(message);
}

export class Figure {
    static getTriangle(base, height) {
        return base * height /2;
    }
}