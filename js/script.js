"use strict";

// (function () {
//     'use strict';
//     // this function is strict...
//  }());
 
//  (function () {
//     // but this function is sloppy...
//  }());

/*jshint strict:false */
 
// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// }

// obj.a = 10;

// console.log(obj);

// console.log(name);
// var name = 'Kir';

// {
//     let result = 50;
// }

// console.log(result);


// 

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt('18?', '18'); // +prompt // number
// console.log(typeof(answer));  // string

// const answers = [];

// answers[0] = prompt('You name?', '');
// answers[1] = prompt('You surname?', '');
// answers[2] = prompt('You age?', '');

// document.write(answers);

// console.log(typeof(answers));
// console.log(typeof(null));  // object but its wrong

// let name = prompt('you  name?', '');

// alert(`Ypu name is ${name}`); 

const category = 'toys';

console.log('https://someurl.com/' + category + '/' + '5');  // ES5
console.log(`https://someurl.com/${category}/5`);  //ES6

// const user = 'Kir';

// alert(`Hello, ${user}`);

console.log('arr' + 'object'); // строка
console.log('4' + 5); // строка
console.log(4 + +'3'); // число

let incr = 10,
    decr = 10;

// incr++;
// decr--;
// ++incr;
// --decr;

// console.log(incr++); // 10
// console.log(decr--); // 10

console.log(++incr); // 11
console.log(--decr);// 9

console.log(5%2);

console.log(2*4 == 8); //true
console.log(2*4 == '8'); //true
console.log(2*4 === '8'); //false
console.log(2 + 2 * 2 != '8'); //true

&& // и
|| // или

const isChecked = true,
      isClose = true;

console.log(isChecked && isClose); // true
console.log(isChecked || isClose); // true
console.log(!isChecked || !isClose); // false



