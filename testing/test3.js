/*
  Массив наибольших значений вложенного массива
  Возвращает массив, состоящий из наибольших чисел каждого вложенного массива. Для простоты предоставленный массив будет содержать ровно 4 вложенных массива.
*/

const аггуNumbers = [
  [1,2,3,4],
  [5,18,0,12],
  [3,5,12,5],
  [28,9,2,34],
]

function getArrayConsistingLargestNumbers(arry) {
  return arry[0].length()
}

console.log(getArrayConsistingLargestNumbers(аггуNumbers));