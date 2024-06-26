# Поиск гласных 



```js
const findVowels = str => {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++
    }
  }
  return count
}
```

Важно обратить внимание на использование метода .includes(). Он доступен и для строк, и для массивов. Его стоит применять для того, чтобы выявить, содержит ли массив определенное значение. Этот метод возвращает true, если массив содержит указанное значение, и false, если нет.

Есть и более краткое решение проблемы:

```js
const findVowels = str => {
  const matched = str.match(/[aeiou]/gi)
  return matched ? matches.length : 0
}
```

Здесь задействуется метод .match(), который позволяет реализовать эффективный поиск. Если регулярное выражение как аргумент метода обнаружено внутри указанной строки, то возвращаемым значением становится массив совпадающих символов. Ну а если совпадений нет, то .match() возвращает null.