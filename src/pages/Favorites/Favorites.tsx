import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import type { RootState } from "../../store/store";
import type { Movie } from "../../components/interfaces/movie.interface";
import { PREFIX, apiHeaders } from "../../helpers/Api";
import { CardsList } from "../../components/CardsList/CardsList";

export function Favorites() {
  const idMovies = useSelector(
    (state: RootState) => state.favorites.idMovies
  );

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getFavorites = async () => {
      if (idMovies.length === 0) {
        setMovies([]);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const responses = await Promise.all(
          idMovies.map((id) =>
            axios.get<Movie>(
              `${PREFIX}/movie/${id}`,
              {
                headers: apiHeaders,
              }
            )
          )
        );

        setMovies(
          responses.map((response) => response.data)
        );
      } catch (error) {
        console.error("Ошибка загрузки избранных фильмов:", error);
        setError("Не удалось загрузить избранные фильмы");
      } finally {
        setLoading(false);
      }
    };

    getFavorites();
  }, [idMovies]);

  if (loading) {
    return <p>Загрузка избранных фильмов...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>Мои фильмы</h1>

      {movies.length > 0 ? (
        <CardsList data={movies} />
      ) : (
        <p>У вас пока нет избранных фильмов</p>
      )}
    </>
  );
}