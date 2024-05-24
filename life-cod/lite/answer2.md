# Решение №1

Для первой попытки вы можете использовать **string.split(' ')** метод разбиения отдельных слов в предложении на массивы индексов. Этот способ не будет учитывать пунктуацию, однако вы можете решить эту проблему с помощью регулярного выражения.

Далее мы можем перебрать каждый элемент массива и подсчитать количество букв в каждом слове. Мы можем отследить самое длинное слова в предложении. Если текущее значение слова больше максимального значения слова, сохраненного в данный момент, заменяем его! Затем просто возвращаем переменную, содержащую самое длинное слово.

Вы можете перебрать массив с помощью цикла for или метода **array.forEach()**. Я предпочитаю последнее, но я включила и то, и другое ниже.

```js
// Решение с использованием цикла for
function findLongestWordLength(str) {
	let maxVal = 0;
	const wordArr = str.split(' ');

	for(let i = 0; i < wordArr.length; i++) {
		let word = wordArr[i];
		if (word.length > maxVal) {
			maxVal = word.length;
		}
	}
	return maxVal;
}

// Решение с использованием метода array.forEach
function findLongestWordLength(str) {
	let maxVal = 0;
	const wordArr = str.split(' ');
	
	wordArr.forEach(word => {
		if (word.length > maxVal) {
			maxVal = word.length;
		}

	});
	return maxVal;
}
```

# Решение №2

Чтобы оптимизировать это решение, мы всё равно будем использовать метод string.split(), который позволяет разделить предложение на элементы массива по словам.

Далее мы будем использовать метод array.map(), который позволяет взаимодействовать с различными значениями каждого элемента массива. Это вернет совершенно новый массив с необходимыми значениями, поэтому мы сохраним его в новой переменной.

Для каждого элемента в массиве вернём длину строки и сохраним её в новом массиве под названием arrOfLengths.

Наконец, мы можем использовать метод Math.max(...spreadOperator) с оператором spread для того, чтобы вернуть целочисленное значение для самой длинной строки в предложении.

```js
function findLongestWordLength(str) {
	const arrOfWords = str.split(' ');
	const arrOfLengths = arrOfWords.map(item => item.length);

	return Math.max(...arrOfLengths);
}
```