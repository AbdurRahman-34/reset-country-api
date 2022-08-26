const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data=> displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries);
    const countriesHtml = countries.map(country => getCountryHTml(country))
    // console.log(countriesHtml[0])
    const conatinar = document.getElementById("countries")
    conatinar.innerHTML = countriesHtml.join(' ');

}

const getCountryHTml = country => {
    return `
    <div class = 'country'> 
    <h2>${country.name}</h2>
    <img src = '${country.flags.png}'>
    <p>${country.nativeName}</p>
    <p>Phone ${country.population}</p>
    </div>
    `
}


loadCountries ()