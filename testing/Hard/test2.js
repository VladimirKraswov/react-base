/*
  У вас есть отсортированный массив целых чисел, начиная с 1 и заканчивая n 
  (где n - количество элементов в массиве). В этом массиве пропущено одно число. 
  Напишите функцию, которая принимает такой массив и возвращает недостающее число.

  Используйте бинарный поиск для нахождения пропущенного числа.
  Обратите внимание, что в отсортированном массиве,
  недостающее число будет находиться между двумя соседними числами в массиве.
*/

function missingNumber(nums) {
}

console.log(missingNumber([1, 2, 4, 5, 6])) // Должно вернуть 3
console.log(missingNumber([1, 2, 3, 4, 5, 7, 8, 9])) // Должно вернуть 6