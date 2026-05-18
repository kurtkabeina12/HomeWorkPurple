import "./CardsList.css"
import { Card } from "../Card/Card"

export function CardsList({ data }) {
	return (
		<div className="card-list">
			{data.map((el) => (
				<div key={el.id}>
					<Card
						image={el.image}
						filmName={el.filmName}
						filmRating={el.filmRating}
					/>
				</div>
			))}
		</div>
	)
}