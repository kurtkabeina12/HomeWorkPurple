import { forwardRef } from 'react';
import styles from './Input.module.css';
import { InputProps } from './Input.props';
import cn from 'classnames';

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ placeholder, image, value, onChange },
	ref
) {
	const inputClassName = image
		? `${cn(styles['inputBlock'])} ${cn(styles['image'])}`
		: cn(styles['inputBlock']);

	return (
		<div className={cn(styles['blockInput'])}>
			{image && (
				<img
					className={cn(styles['searchImage'])}
					src="../src/assets/search-normal.png"
					alt="Поиск"
				/>
			)}

			<input
				ref={ref}
				placeholder={placeholder}
				className={inputClassName}
				type="text"
				value={value}
				onChange={onChange}
			/>
		</div>
	);
});