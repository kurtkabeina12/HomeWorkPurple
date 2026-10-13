import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import cn from 'classnames';
import styles from "./Movie.module.css";

import like from "../../assets/like.svg";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { favoritesActions } from '../../store/favorites.slice';
export const Movie = () => {
    const { data } = useLoaderData() as {
        data: Promise<any>
    };

    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <Suspense fallback={<div>Загрузка фильма...</div>}>
                <Await resolve={data}>
                    {(response) => {
                        const movie = response.data;

                        const handleFavorite = () => {
                            dispatch(favoritesActions.addFavorite(movie.id));
                        };

                        return (
                            <div>
                                <h1>{movie.title}</h1>

                                <div>
                                    <img />

                                    <div>
                                        <p>{movie.overview}</p>
                                        <p>{movie.vote_average}</p>

                                        Дата выхода
                                        <p>{movie.release_date}</p>

                                        Жанры
                                        <p>
                                            {movie.genres.map(
                                                (genre: { name: string }) => genre.name
                                            ).join(', ')}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    className={cn(styles["cardItemBtn"])}
                                    onClick={handleFavorite}
                                >
                                    <img src={like} />
                                    В избранное
                                </button>
                            </div>
                        );
                    }}
                </Await>
            </Suspense>
        </div>
    );
};