/*
  Нужно оптимизировать рендеринг следующими способами
  1 - С использованием React.memo
  2 - Переместив состояние состояние вниз по дереву
  3 - Поднимите контент вверх по дереву
*/
import { useState } from 'react';

import { performance } from 'perf_hooks';

function HeavyComponent() {
	let now = performance.now();


	while (performance.now() - now < 100)
	{ 
		// Искусственная задержка в 100ms
	}

	return <p>Я очень медленный компонент.</p>
}


function AppSlow() {
  const [color, setColor] = useState('red');

	return ( 
		<div>
			<input
				value={color}
				onChange={(e) => setColor(e.target.value)}
			/> 
			<p style={{ color }}>Hello, world!</p>
			<HeavyComponent />
		</div>
	)
}

export default AppSlow;
