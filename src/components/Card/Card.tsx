import styles from "./Card.module.css"
import star from "../../assets/star.svg"
import like from "../../assets/like.svg"
import { CardProps } from "./Card.props"
import cn from 'classnames';

export function Card({ image, filmName, filmRating }: CardProps) {
	return (
		<div className={cn(styles['cardItem'])}>
			<img className={cn(styles['cardItemImage'])} src={image} />
			<div className={cn(styles['cardItemRating'])}>
				<img src={star} />
				<p className={cn(styles['cardItemRatingText'])}>{filmRating}</p>
			</div>
			<div className={cn(styles['cardItemInfo'])}>
				<p className={cn(styles['cardItemName'])}>{filmName}</p>
				<button className={cn(styles['cardItemBtn'])}>
					<img src={like} />
					В избранное
				</button>
			</div>
		</div>
	)
}