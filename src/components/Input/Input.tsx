import { forwardRef } from 'react';
import styles from './Input.module.css';
import { InputProps } from './Input.props';

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ placeholder, image, value, onChange },
	ref
) {
	const inputClassName = image
		? `${styles.inputBlock} ${styles.image}`
		: styles.inputBlock;

	return (
		<div className={styles.blockInput}>
			{image && (
				<img
					className={styles.searchImage}
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