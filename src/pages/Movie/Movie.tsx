import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

export const Movie = () => {
	const { data } = useLoaderData() as {
		data: Promise<any>
	};

	return (
		<div>
			<Suspense fallback={<div>Загрузка фильма...</div>}>
				<Await resolve={data}>
					{(response) => {
						const movie = response.data;
						console.log('Фильм на странице:', movie);

						return (
							<div>
								<h1>{movie.title}</h1>
							</div>
						);
					}}
				</Await>
			</Suspense>
		</div>
	);
};