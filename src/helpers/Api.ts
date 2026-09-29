export const PREFIX = 'https://api.themoviedb.org/3';
export const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmY2OGM1ZWU1NTU3MGUyMzI2YzMxZTkyNjY3NmYyYyIsIm5iZiI6MTc5MDYyMDcwMi45NTksInN1YiI6IjZhYmFiNDFlMmVlOGNiOWVlZTFiNGIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.loG2UaTK7dAbx6gP7u0ZSLGSxrUp3DYWtfjex6XrJN4';

export const apiHeaders = {
	accept: 'application/json',
	Authorization: `Bearer ${TOKEN}`
};
