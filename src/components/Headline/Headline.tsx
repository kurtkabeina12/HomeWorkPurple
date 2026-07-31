/* Headline.jsx */
import styles from './Headline.module.css'
import { HeadlineProps } from './Headline.props'
import cn from 'classnames';

export function Headline({ text }: HeadlineProps) {
    return (
        <h2 className={cn(styles['headlineBlock'])}>
            {text}
        </h2>
    )
}