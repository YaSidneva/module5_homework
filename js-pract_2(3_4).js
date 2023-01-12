/*3.Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/
let string = 'Hello';
string = string.split('').reverse().join('');
console.log(string);


/*4. Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.*/
let x;
const min = 0;
const max = 100;
x = Math.floor(Math.random() * (max - min + 1) + min);
console.log(x);