# Поиск гласных 


Решение
```js
  const fibonacci = num => {
    // store the Fibonacci sequence you're going
    // to generate inside an array and
    // initialize the array with the first two
    // numbers of the sequence
    const result = [0, 1]
  
    for(let i = 2; i <= num; i++) {
      // push the sum of the two numbers
      // preceding the position of i in the result array
      // at the end of the result array
      const prevNum1 = result[i - 1]
      const prevNum2 = result[i - 2]
      result.push(prevNum1 + prevNum2)
    }
    // return the last value in the result array
    return result[num]
  }
```

В массиве результатов первые два числа содержатся в ряду, поскольку каждая запись в последовательности состоит из суммы двух предыдущих чисел. В самом начале двух чисел, которые можно взять для получения следующего числа нет, поэтому цикл не может сгенерировать их в автоматическом режиме. Но, как мы знаем, первые два числа — всегда 0 и 1. Поэтому инициализировать массив результатов можно вручную.

Что касается рекурсии, то здесь все проще и сложнее одновременно:

```js
  const fibonacci = num => {
    // if num is either 0 or 1 return num
    if(num < 2) {
      return num
    }
    // recursion here
    return fibonacci(num - 1) + fibonacci(num - 2)
  }
```

Мы продолжаем вызывать fibonacci(), передавая все меньшие числа в качестве аргументов. Останавливаемся в случае, когда переданный аргумент равен 0 или 1.