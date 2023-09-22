// Определение типа для импортированных изображений
type GirlImage = {
  default: string; // URL изображения
};

// Создаем массив имен файлов, например, g1, g2, g3, ..., g26
const girlImageNames = Array.from({ length: 25 }, (_, index) => `g${index + 1}`);

// Создаем объект, который будет содержать импорты для каждого файла
const girlImageImports: any[] = [];

// Импортируем каждый файл и добавляем его в объект girlImageImports
girlImageNames.forEach((imageName) => {
  const image: GirlImage = require(`./girls/${imageName}.png`);
  girlImageImports.push(image);
});

// Экспортируем объект с типизированными импортированными изображениями
export default girlImageImports;