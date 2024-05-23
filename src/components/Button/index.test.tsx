import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';
import '@testing-library/jest-dom';

// Имитируем изображения, чтобы вернуть простую строку,
// поскольку фактический путь к изображению не имеет отношения к тестам
jest.mock('../../assets/button/button.png', () => 'button.png');
jest.mock('../../assets/button/button-active.png', () => 'button-active.png');

describe('Button component tests', () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Проверяем что компонет рендерится
  test('renders button', () => {
    render(<Button onClick={mockOnClick} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  // Проверка на вызов onClick при нажатии кнопки
  test('calls onClick when button is clicked', () => {
    render(<Button onClick={mockOnClick} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalled();
  });

  // Проверка изменения изображения при наведении мышки
  test('changes image on mouse over and resets on mouse out', () => {
    render(<Button onClick={mockOnClick} />);
    const imgElement = screen.getByRole('img') as HTMLImageElement;
    expect(imgElement.src).toContain('button.png');

    fireEvent.mouseOver(imgElement);
    expect(imgElement.src).toContain('button-active.png');

    fireEvent.mouseOut(imgElement);
    expect(imgElement.src).toContain('button.png');
  });

  // Применяются правильные стили рендерится, когда значение isLeft равно true
  test('renders with inverted image when isLeft is true', () => {
    render(<Button onClick={mockOnClick} isLeft={true} />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveStyle('transform: scale(-1, -1)');
  });

    // Применяются правильные стили рендерится, когда значение isLeft равно false
  test('renders with normal image when isLeft is false', () => {
    render(<Button onClick={mockOnClick} isLeft={false} />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveStyle('transform: ');
  });
});