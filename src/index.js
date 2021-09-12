import './css/styles.css';
import fetchCountries from './fetchCountries'
import { debounce } from "debounce";
import Notiflix from "notiflix";
const DEBOUNCE_DELAY = 300;

const refs = {
    form: document.querySelector('#search-box'),
    list: document.querySelector('.country-list'),
}

const searchInput = (e) => {
    const querySearch = e.target.value.trim();

fetchCountries(querySearch)
    .then(data => {
if (data.length >= 11){Notiflix.Notify.info(`Too many matches found. Please enter a more specific name.`)}
else if (data.length === 1){refs.list.innerHTML = data.map(
    ({name, capital,population,flag,languages})=>
    `<li style="list-style: none;display: block;flex-direction: column;align-items: center;">
    <div style="flex-direction: start;"><img style="margin-right: 30px;" src="${flag}"width=80px height=40px alt=""> 
    <h1 style="display:inline"> ${name}</h1></div>
    <p><span style="font-weight: bold;">Capital:</span>  ${capital}</p>
    <p><span style="font-weight: bold;">Population:</span>   ${population}</p>
    <p><span style="font-weight: bold;">Lenguages:</span>   ${languages.map(leng=>leng.nativeName)}</p>
    
    </li>`).join('')}
else 
{ refs.list.innerHTML = data.map(
    ({name, capital,population,flag,languages})=>
    `<li style="list-style: none"><img src="${flag}"width=20px alt=""> ${name}
    </li>`).join('')}})

    .catch((e) => {
        // console.log(e);
        Notiflix.Notify.failure('Oops, there is no country with that name');
    });

    
}
 
refs.form.addEventListener('input', debounce(searchInput,DEBOUNCE_DELAY))



