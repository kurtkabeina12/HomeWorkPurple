/* Paragraph.jsx */
import styles from './Paragraph.module.css'
import { ParagraphProps } from './Paragraph.props'
import cn from 'classnames'

export function Paragraph({ data, textSize, textHeigth }: ParagraphProps) {
    return (
        <p className={cn(styles['paragraph'])} style={{ fontSize: textSize, lineHeight: textHeigth }}>
            {data}
        </p>
    )
}