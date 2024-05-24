import { render, screen } from '@testing-library/react';
import WebSlider from '.';
import fetchMock from 'jest-fetch-mock';
import userEvent from '@testing-library/user-event';

fetchMock.enableMocks();

// Имитация асинхронной задержки
export const pause = (time: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

describe('WebSlider', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('fetches and displays an image on mount', async () => {
    // Создаем моковый ответ на первый запрос
    fetchMock.mockResponseOnce(JSON.stringify({
      message: 'http://example.com/dog.jpg', 
      status: 'success'
    }));

    render(<WebSlider />);

    // Дожидаемся загрузки изображения и ищем его
    const img = await screen.findByAltText('Current img') as HTMLImageElement;
    // Компонент присутствует на экране
    expect(img).toBeInTheDocument();
    // Компонент имеет верные пропсы
    expect(img.src).toBe('http://example.com/dog.jpg');
  });

  // Проверка корректности отработки кнопки далее
  it('fetches and updates the image when the button is clicked', async () => {
    // Создаем моковый ответ на первый запрос к бэку
    fetchMock.mockResponseOnce(JSON.stringify({ message: 'http://example.com/dog.jpg', status: 'success' }));
    // Создаем моковый ответ на второй запрос к бэку
    fetchMock.mockResponseOnce(JSON.stringify({ message: 'http://example.com/dog2.jpg', status: 'success' }));

    render(<WebSlider />);

    // Дожидаемся загрузки изображения и ищем его
    const firstImg = await screen.findByAltText('Current img') as HTMLImageElement;
    // Компонент имеет верные пропсы
    expect(firstImg.src).toBe('http://example.com/dog.jpg');

    // Эмитируем нажатие на кнопку далее
    const nextButton = screen.getAllByRole('button')[0];
    userEvent.click(nextButton);

    // Немного подождем пока отработает запрос
    await pause(500)

    // Дожидаемся загрузки изображения и ищем его
    const secondImg = await screen.findByAltText('Current img') as HTMLImageElement;
    // Пропсы компонента изменились
    expect(secondImg.src).toBe('http://example.com/dog2.jpg');
  });

  // Проверка корректной отработки при ошибке с бэка
  it('handles fetch error gracefully', async () => {
    fetchMock.mockReject(new Error('API failure'));

    render(<WebSlider />);

    // Убеждаемся, что изображение не отображается
    const img = screen.queryByAltText('Current img');
    expect(img).toBeNull();
  });
});
