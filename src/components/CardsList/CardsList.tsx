import styles from './CardsList.module.css';
import { Card } from '../Card/Card';
import { CardListProps } from './CardList.props';
import { IMAGE_PREFIX, PREFIX } from '../../helpers/Api';
import cn from 'classnames';
import { Link } from 'react-router-dom';

export function CardsList({ data }: CardListProps) {
	const getPosterUrl = (path: string | null) =>
		path ? `${IMAGE_PREFIX}${path}` : '';
	return (
		<div className={cn(styles['cardList'])}>
			{data.map((el) => (
					<Link to={`/movie/${el.id}`} style={{textDecoration: 'none'}}>
						<Card
							poster_path={el.poster_path ? `${getPosterUrl(el.poster_path)}` : ''}
							title={el.title}
							vote_average={el.vote_average}
						/>
					</Link>
			))}
		</div>
	);
}
