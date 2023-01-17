const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b3fc5ebbc1msh624023432094c86p1190fajsndfda3e6286a4',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

export const getData = () => fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=30&sortBy=ranking&sortOrder=asc', options)
	.then(response => response.json())
	.catch(err => console.error(err));