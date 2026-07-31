export const PREFIX = 'https://api.themoviedb.org/3';
export const IMAGE_PREFIX = 'https://image.tmdb.org/t/p/w500';
export const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODE4NzJiNDQxZjViMDNmZTI3OTI1MzdlMTViNzBiZCIsIm5iZiI6MTc4NTQzMDAzMi45MzcsInN1YiI6IjZhNmI4MDEwMzhjMjg3ZGY3YTNmMDBhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AIu883LimXiCHlnPTWkwQeh8nH11iRdWpwLC85NFCMk';

export const apiHeaders = {
	accept: 'application/json',
	Authorization: `Bearer ${TOKEN}`
};
