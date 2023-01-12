/*Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.*/
let arr = [1, 2, 3];
let result = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[1] !== arr[i]) {
    result = false;
    break;
  }
}
console.log(result);



/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.*/
let a = ["a", 2, true, 4, 5, 10, 11, null, 0];
let sumEven = 0;
let sumOdd = 0;
let sumZero = 0;

for (let i = 0; i < a.length; i++) {
  if (typeof a[i] == "number") {
    if (a[i] % 2 === 0 && a[i] !== 0) {
      sumEven++;
    } else if (a[i] === 0) {
      sumZero++;
    } else {
      sumOdd++;
    }
  } else {
    console.log(a[i] + " " + "не является числом");
  }
}

console.log(sumEven + " - " + "количество четных элементов");
console.log(sumZero + " - " + "количество нолей");
console.log(sumOdd + " - " + "количество нечетных элементов");