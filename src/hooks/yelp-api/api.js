import {API_BASE_URL, BEARER_TOKEN} from './config';
import queryString from 'query-string'

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);

    let lon;
    let lat;
//http://www.geoplugin.net/json.gp   cors

    // fetch('https://cors-anywhere.herokuapp.com/http://gd.geobytes.com/GetCityDetails',{

    // fetch('https://json.geoiplookup.io/api',{

    // fetch('http://api.hostip.info/get_html.php',{
    fetch('http://ip-api.com/json', {
        headers: {

            mode: 'no-cors',
            Origin: 'localhost:3000',

        }
    })
        .then(res => res.json())
        .then(json => {
            console.log({data: json.lat + ',' + json.lon});


            lat = json.lat;

            lon = json.lon;
            console.log(lat + ',' + lon)
        })



let url = `${API_BASE_URL}${path}?${query}`;
    console.log(url);
    console.log(lat + ',' + lon)


    return fetch(url, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost:3000',
            withCredentials: true,
        }
    });
}