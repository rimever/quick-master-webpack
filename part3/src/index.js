import { APP_NAME,hello,Figure} from "./myutil";
if (process.env.NODE_ENV === 'development') {
    console.log('!! Running in develop mode !!');
}
console.log(APP_NAME);
hello();
console.log(Figure.getTriangle(10,5));
console.log(Figure.getTriangle(30,10));