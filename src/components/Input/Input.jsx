/* Input.jsx */

import { useState } from 'react'
import './Input.css'

export function Input({ placeholder, image }) {
	const inputClassName = image ? 'input-block image' : 'input-block';

	const texted = (e) => {
		setVal(e.target.value)
	}

	return (
		<div className='block-input'>
			{image ?
				<>
					<img className="search-image" src="../src/assets/search-normal.png" alt="Поиск" />
				</>
				:
				''
			}
			<input placeholder={placeholder} className={inputClassName} type='text' />
		</div>
	)
}