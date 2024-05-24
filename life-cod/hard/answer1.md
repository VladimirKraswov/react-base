# Решение

Принцип - идем слева направо и справа налево и выбираем самые большие квадраты, в результате у нам получается список квадратов от большего к меньшему

такой подход дает решение задачи за линейное время

```js
function sortedSquaredArray(arr) {
    const squaredArr = new Array(arr.length); // Создаем массив длиной массиву arr
    let left = 0;
    let right = arr.length - 1;

    for (let i = arr.length - 1; i >= 0; i--) {
        const leftVal = Math.abs(arr[left]); // Отрицательные числа превращаются в положительные.
        const rightVal = Math.abs(arr[right]); // Отрицательные числа превращаются в положительные.

        if (leftVal > rightVal) {
            squaredArr[i] = leftVal * leftVal; // Получаем квадрат числа
            left++;
        } else {
            squaredArr[i] = rightVal * rightVal; // Получаем квадрат числа
            right--;
        }
    }

    return squaredArr;
}

// Пример использования:
const sortedArray = [-4, -2, 0, 3, 5];
const result = sortedSquaredArray(sortedArray);
console.log(result); // Выведет: [0, 4, 9, 16, 25]

```