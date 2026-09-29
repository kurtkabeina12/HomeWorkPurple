import styles from "./Card.module.css";

import star from "../../assets/star.svg";
import like from "../../assets/like.svg";

import { CardProps } from "./Card.props";
import cn from "classnames";

import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { favoritesActions } from "../../store/favorites.slice";

export function Card({
    id,
    poster_path,
    title,
    vote_average
}: CardProps) {

    const dispatch = useDispatch<AppDispatch>();

    const handleFavorite = () => {
        dispatch(favoritesActions.addFavorite(id));
    };

    return (
        <div className={cn(styles["cardItem"])}>

            <img
                className={cn(styles["cardItemImage"])}
                src={poster_path}
            />

            <div className={cn(styles["cardItemRating"])}>
                <img src={star} />
                <p className={cn(styles["cardItemRatingText"])}>
                    {Math.round(vote_average)}
                </p>
            </div>

            <div className={cn(styles["cardItemInfo"])}>
                <p className={cn(styles["cardItemName"])}>
                    {title}
                </p>

                <button
                    className={cn(styles["cardItemBtn"])}
                    onClick={handleFavorite}
                >
                    <img src={like} />
                    В избранное
                </button>
            </div>

        </div>
    );
}