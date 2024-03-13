import React,  { useState } from 'react';

import { performance } from 'perf_hooks';

function ExpensiveTree() {
	let now = performance.now();


	while (performance.now() - now < 100)
	{ 
		// Искусственная задержка в 100ms
	}
	React.useEffect(()=>{
		return(()=>{
			
		})
	})
	return <p>I am a very slow component tree.</p>
}


function App() {
  const [color, setColor] = useState('red');

	return ( 
		<div>
			<input
				value={color}
				onChange={(e) => setColor(e.target.value)}
			/> 
			<p style={{ color }}>Hello, world!</p>
			<ExpensiveTree />
		</div>
	)
}

export default App;
