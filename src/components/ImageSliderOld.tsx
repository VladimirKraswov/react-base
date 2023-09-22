import React, { Component, PureComponent } from 'react';
import Button from './Button';

interface ImageSliderProps {
  images: any;
  onChangeColor?: () => void;
}

interface ImageSliderState {
  currentIndex: number;
}

// class ImageSliderOld extends PureComponent<ImageSliderProps, ImageSliderState> {
class ImageSliderOld extends Component<ImageSliderProps, ImageSliderState> {
  // Метод-конструктор, вызывается при создании экземпляра компонента.
  // Используется для инициализации состояния и привязки методов к экземпляру.
  constructor(props: ImageSliderProps) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  // Вызывается после того, как компонент был вставлен в DOM.
  // Используется для выполнения действий, которые требуют доступа к DOM или инициализации данных.
  componentDidMount() {
    console.log('componentDidMount');
  }

  // Вызывается после обновления компонента и после того, как новый вывод был отрисован в DOM.
  // Используется для выполнения действий на основе предыдущих и текущих свойств и состояния.
  componentDidUpdate(prevProps: {}, prevState: ImageSliderState) {
    console.log('componentDidUpdate');
  }

  // Вызывается перед удалением компонента из DOM.
  // Используется для очистки ресурсов, отписки от событий или выполнения других завершающих действий.
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // Определяет, должен ли компонент обновляться после изменения свойств или состояния.
  // Возвращает true (по умолчанию) или false для оптимизации рендеринга.
  // Не используется при PureComponent так как PureComponent уже реализует этот метод поверхностным сравнением
  shouldComponentUpdate(nextProps: {}, nextState: ImageSliderState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  // Статический метод, вызывается при обновлении свойств компонента.
  // Используется для обновления состояния компонента на основе новых свойств.
  static getDerivedStateFromProps(nextProps: {}, prevState: ImageSliderState) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  // Вызывается перед фактическим обновлением DOM.
  // Используется, например, для сохранения позиции прокрутки перед обновлением компонента.
  getSnapshotBeforeUpdate(prevProps: {}, prevState: ImageSliderState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  // Вызывается при возникновении ошибки в компоненте или его дочерних компонентах.
  // Используется для обработки ошибок и отображения запасного контента.
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log('componentDidCatch');
  }

  // Следующий слайд
  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
    }));
  };

  // Предыдущий слайд
  handlePrev = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + this.props.images.length) %
        this.props.images.length,
    }));
  };

  // Обязательный метод, который возвращает JSX-разметку для отображения компонента.
  // Вызывается при каждом обновлении компонента.
  render() {
    console.log('Render: ImageSliderOld');
    const { images } = this.props;
    const { currentIndex } = this.state;

    return (
      <div>
        <img src={images[currentIndex]} alt="Current" />
        <div style={styles.buttonContainer}>
      <Button isLeft onClick={this.handlePrev} />
      <button
        style={styles.rndColorBtn}
        onClick={this.props.onChangeColor}
      >
          <h2 style={styles.rndColorBtnText}>Random Color</h2>
      </button>
      <Button onClick={this.handleNext} />
      </div>
      </div>
    );
  }
}

const styles: { [name: string]: React.CSSProperties }  = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rndColorBtn: {
    border: "3px solid #F2A42A",
    borderRadius: 20,
    padding: '5px 5px',
  },
  rndColorBtnText: {
    color: '#F2A42A'
  }
}

export default ImageSliderOld;
