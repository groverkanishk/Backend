import { add, subt, multi, div } from './math.js';
import os from 'os';

// console.log(add(10, 20));
// console.log(subt(20, 10));
// console.log(multi(5, 4));
// console.log(div(20, 4));

if (os.platform() === 'Windows_NT') {
    console.log('This is Windows');
} else {
    console.log('This is Linux');
}

console.log(os.type());