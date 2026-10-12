import axios, { AxiosError } from 'axios';
import { CardsList } from '../../components/CardsList/CardsList';
import { Headline } from '../../components/Headline/Headline';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { Search } from '../../components/Search/Search';
import { UserContext } from '../../context/user.context';
import { Login } from '../Login/Login';
import { useContext, useEffect, useState } from 'react';
import { PREFIX, apiHeaders } from '../../helpers/Api';
import { Movie } from '../../components/interfaces/movie.interface';

function Main() {
	const context = useContext(UserContext);
	const [movies, setMovies] = useState<Movie[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const getMovies = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get<{ results: Movie[] }>(
				`${PREFIX}/movie/popular`,
				{ headers: apiHeaders }
			);
			setMovies(data.results);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getMovies();
	}, []);

	if (!context) {
		throw new Error('UserContext not found');
	}

	const { user } = context;

	const handleSearch = async (query: string) => {
		console.log(query, 'страница Main')
		try {
			setIsLoading(true);
			const { data } = await axios.get<{ results: Movie[] }>(
				`${PREFIX}/search/movie?query=${query}`,
				{ headers: apiHeaders }
			);
			setMovies(data.results);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
		}
	}

	return (
		<>
			{user && user.isLogined ? (
				<>
					<Headline text={'Поиск'} />
					<Paragraph
						data={
							'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
						}
						textSize={'16px'}
						textHeigth={'150%'}
					/>
					<Search onSearch={handleSearch} />
					{error && <Paragraph data={error} textSize={'16px'} textHeigth={'150%'} />}
					{isLoading && (
						<Paragraph data={'Загрузка...'} textSize={'16px'} textHeigth={'150%'} />
					)}
					{!isLoading && movies.length === 0 && (
						<>
						<Headline text={'Упс... Ничего не найдено'} />
						<Paragraph data={'Попробуйте изменить запрос или ввести более точное название фильма'} textSize={'20px'} textHeigth={'160%'}/>
						</>
					)}
					{!isLoading && <CardsList data={movies} />}
				</>
			) : (
				<>
					<Login />
				</>
			)}
		</>
	);
}

export default Main;
