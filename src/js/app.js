/* eslint-disable no-console */
// TODO: write code here
import { creaSortedArr } from './creaSortedArr';

console.log('app.js bundled');

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const orderReq = ['name', 'level'];

console.log('Исходный объект:');
console.table(obj);
console.log('Результат сотрировки:');
console.table(creaSortedArr(obj, orderReq));
