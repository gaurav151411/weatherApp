const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1f38974303mshd6e14d884ce909fp1a50f6jsnb816a2be044a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
.then(response => response.json())
.then(response =>{
    console.log(response)
    temp.innerHTML=response.temp +" &#8451"
    feels_like.innerHTML=response.feels_like +" &#8451"
    humidity.innerHTML=response.humidity+" %"
    min_temp.innerHTML=response.min_temp+" &#8451"
    max_temp.innerHTML=response.max_temp+" &#8451"

})
.catch(err => console.error(err)); 

  






