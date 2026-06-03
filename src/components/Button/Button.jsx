import { forwardRef } from 'react';
import styles from './Button.module.css';

export const Button = forwardRef(function Button(
    { text, onClick },
    ref
) {
    return (
        <button
            ref={ref}
            className={styles.button}
            onClick={onClick}
        >
            {text}
        </button>
    );
});