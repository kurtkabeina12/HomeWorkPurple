/* Button.jsx */
import styles from './Button.module.css'

export function Button({ text, onClick }) {

    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    )
}