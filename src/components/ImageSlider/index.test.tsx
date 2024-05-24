import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import ImageSlider from '.';
import '@testing-library/jest-dom/extend-expect';
import { UnknownAction } from 'redux';
import { RootState } from '../../store';
import { setCurrentSlide } from '../../store/sliderSlice';
import userEvent from '@testing-library/user-event';

export const pause = (time: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

// Определяем тип начального состояния, который будет соответствовать нашему корневому состоянию
type State = Partial<RootState>;
// Создаем макет стора с middleware и типом начального состояния
const mockStore = configureMockStore<State>();
// Определяем тип нашего стора
type MockStore = ReturnType<typeof mockStore>;

describe('ImageSlider', () => {
  // Имитируем набор изображений отображаемых слайдером
  const images = ['url1.jpg', 'url2.jpg', 'url3.jpg'];
  let store: MockStore;

  // Функция updateState предназначена для ручного обновления состояния мокового (имитационного) хранилища 
  // в контексте юнит-тестирования. Это необходимо, поскольку моковое хранилище, 
  // используемое для тестов, само по себе не обновляет своё состояние в ответ на действия (actions), 
  // в отличие от реального хранилища Redux.
  const updateState = (store: MockStore, action: UnknownAction) => {
    switch (action.type) {
      case setCurrentSlide.type:
        store.getState().slider.currentSlide = action.payload;
        break;
      default:
        break;
    }
  };

  beforeEach(() => {
    // Инициализировать с состоянием ползунка по его начальному индексу
    store = mockStore({
      slider: {
        currentSlide: 0
      }
    });
   // Явно имитирует store.dispatch
    store.dispatch = jest.fn();
  });

  // Проверка первоначального рендера
  test('renders the current image', () => {
    render(
      <Provider store={store}>
        <ImageSlider images={images} />
      </Provider>
    );

    // Проверяем что слайдер отрисовался с первым изображением из массива
    const currentImg = screen.getByAltText('Current img');
    expect(currentImg).toHaveAttribute('src', 'url1.jpg');
  });

  // Проверка корректной отработки действия по нажатию на кнопку next
  test('navigates to the next image on next button click', () => {
    // Устанавливаем начальный слайд на первое изображение
    store = mockStore({
      slider: {
        currentSlide: 0
      }
    });

    render(
      <Provider store={store}>
        <ImageSlider images={images} />
      </Provider>
    );

    // Находим кнопку next и нажимаем на нее
    const nextButton = screen.getAllByRole('button')[2];
    userEvent.click(nextButton);

    // Проверяем что после нажатия был создан правильный экшен
    const actions = store.getActions();
    expect(actions).toEqual(expect.arrayContaining([
      expect.objectContaining({
        type: setCurrentSlide.type,
        payload: 1,
      })
    ]));

    // Имитировать обновление состояния на основе отправленных действий
    store.getActions().forEach(action => updateState(store, action));
    // Убеждаемся, что состояние было обновлено
    expect(store.getState().slider.currentSlide).toBe(1);
  });

  // Проверка корректной отработки действия по нажатию на кнопку previous
  test('navigates to the previous image on previous button click', () => {
    // Устанавливаем начальный слайд на второе изображение
    store = mockStore({
      slider: {
        currentSlide: 1
      }
    });

    render(
      <Provider store={store}>
        <ImageSlider images={images} />
      </Provider>
    );

    // Находим кнопку prev и нажимаем на нее
    const prevButton = screen.getAllByRole('button')[0];
    userEvent.click(prevButton);

    // Проверяем что после нажатия был создан правильный экшен
    const actions = store.getActions();
    expect(actions).toEqual(expect.arrayContaining([
      expect.objectContaining({
        type: setCurrentSlide.type,
        payload: 0,
      })
    ]));

    // Имитировать обновление состояния на основе отправленных действий
    store.getActions().forEach(action => updateState(store, action));
    // Убедитесь, что состояние было обновлено
    expect(store.getState().slider.currentSlide).toBe(0);
  });

  // Проверяем что при нажатии на кнопку смены цвета вызывается onChangeColor
  test('calls onChangeColor when color change button is clicked', () => {
    const onChangeColorMock = jest.fn();
    render(
      <Provider store={store}>
        <ImageSlider images={images} onChangeColor={onChangeColorMock} />
      </Provider>
    );

    const colorButton = screen.getByText('Random Color');
    userEvent.click(colorButton);
    expect(onChangeColorMock).toHaveBeenCalled();
  });
});