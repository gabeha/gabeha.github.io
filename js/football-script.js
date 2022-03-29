const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
		'X-RapidAPI-Key': 'b8911b8465mshe54ba8faba84b3bp1799e3jsn9612efbb8655'
	}
};

fetch('https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=US', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));