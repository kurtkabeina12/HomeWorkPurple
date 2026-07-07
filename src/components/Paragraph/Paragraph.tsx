/* Paragraph.jsx */
import styles from './Paragraph.module.css'
import { ParagraphProps } from './Paragraph.props'

export function Paragraph({ data, textSize, textHeigth }: ParagraphProps) {
    return (
        <p className={styles.paragraph} style={{ fontSize: textSize, lineHeight: textHeigth }}>
            {data}
        </p>
    )
}