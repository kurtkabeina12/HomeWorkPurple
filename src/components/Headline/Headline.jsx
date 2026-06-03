/* Headline.jsx */
import styles from './Headline.module.css'

export function Headline({ text }) {
    return (
        <h2 className={styles.headlineBlock}>
            {text}
        </h2>
    )
}