import { CardProps } from "../Card/Card.props";

export interface CardItem extends CardProps {
    id: number;
}

export interface CardListProps {
    data: CardItem[];
}