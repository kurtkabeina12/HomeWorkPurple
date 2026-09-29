import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

export function Favorites() {
    const idMovies = useSelector(
        (state: RootState) => state.favorites.idMovies
    );

    console.log("Избранные фильмы:", idMovies);

    return (
        <>
            Favorites
        </>
    );
}