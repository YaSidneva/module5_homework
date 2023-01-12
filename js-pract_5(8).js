/*Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

Используйте шаблонные строки.*/

let myMap = new Map();
myMap.set("1", true);
myMap.set(2, "string");

for (let [key, value] of myMap) {
  console.log(`Ключ — ${key}, значение — ${value}`);
}
