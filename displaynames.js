fetch('https://restcountries.com/v3.1/all')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(country => {
      const name = country.name.common;
      const region = country.region;
      const subregion = country.subregion;
      const population = country.population;
      
      console.log("Country: " + name);
      console.log("Region: " + region);
      console.log("Subregion: " + subregion);
      console.log("Population: " + population);
    });
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });
