export function generateRandomColor() {
  // Генерируем три случайных числа для каждой компоненты цвета (RGB)
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Формируем строку в формате RGB
  const color = `rgb(${red},${green},${blue})`;

  return color;
}