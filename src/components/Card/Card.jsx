import "./Card.css"
import star from "../../assets/star.svg"
import like from "../../assets/like.svg"

export function Card({ image, filmName, filmRating }) {
	return (
		<div className="card-item">
			<img className="card-item__image" src={image} />
			<div className="card-item__rating">
				<img src={star} />
				<p className="card-item__rating_text">{filmRating}</p>
			</div>
			<div className="card-item__info">
				<p className="card-item__name">{filmName}</p>
				<button className="card-item__btn">
					<img src={like}/>
					В избранное
				</button>
			</div>
		</div>
	)
}