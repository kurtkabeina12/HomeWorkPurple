import styles from "./Card.module.css"
import star from "../../assets/star.svg"
import like from "../../assets/like.svg"
import { CardProps } from "./Card.props"

export function Card({ image, filmName, filmRating }: CardProps) {
	return (
		<div className={styles.cardItem}>
			<img className={styles.cardItemImage} src={image} />
			<div className={styles.cardItemRating}>
				<img src={star} />
				<p className={styles.cardItemRatingText}>{filmRating}</p>
			</div>
			<div className={styles.cardItemInfo}>
				<p className={styles.cardItemName}>{filmName}</p>
				<button className={styles.cardItemBtn}>
					<img src={like} />
					В избранное
				</button>
			</div>
		</div>
	)
}