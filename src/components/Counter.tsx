import React, { useState } from 'react'
import './Counter.module.scss'

const Counter = () => {

	const [count, setCount] = useState<number>(0)

	function clickHandler() {
		setCount(count + 1)
	}


	return (
		<div className='asc'>
			<button onClick={clickHandler}>Click me!</button>
			<div className="">{count}</div>
		</div>
	)
}

export default Counter