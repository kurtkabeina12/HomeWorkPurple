import styles from './CardsList.module.css';

import { Card } from '../Card/Card';

import { CardListProps } from './CardList.props';

import cn from 'classnames';

import { Link } from 'react-router-dom';

export function CardsList({ data }: CardListProps) {

    return (
        <div className={cn(styles['cardList'])}>
            {data.map((el) => (

                <Link
                    key={el.id}
                    to={`/movie/${el.id}`}
                    style={{ textDecoration: 'none' }}
                >
                    <Card
                        id={el.id}
                        poster_path={''}
                        title={el.title}
                        vote_average={el.vote_average}
                    />
                </Link>

            ))}
        </div>
    );
}