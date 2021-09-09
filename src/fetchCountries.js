
export default function fetchCountries(query) {

    return fetch(`https://restcountries.eu/rest/v2/name/${query}
    `)
    .then(res => {if (!res.ok){throw Error(res.statusText)} return res})
      .then(res => res.json())
      .then(data => data);
  };
  