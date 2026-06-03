/* Paragraph.jsx */
import styles from './Paragraph.module.css'

export function Paragraph({ data, textSize, textHeigth }) {
    return (
        <p className={styles.paragraph} style={{ fontSize: textSize, lineHeight: textHeigth }}>
            {data}
        </p>
    )
}