/* Headline.jsx */
import styles from './Headline.module.css'
import { HeadlineProps } from './Headline.props'

export function Headline({ text }: HeadlineProps) {
    return (
        <h2 className={styles.headlineBlock}>
            {text}
        </h2>
    )
}