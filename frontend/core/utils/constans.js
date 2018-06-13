import L from 'leaflet';
import flagSuccess from '../../img/flag-success.png';
import flagIcon from '../../img/flags-icon.png';

export const cities = [
    {name: "Amsterdam", position:{lat: 52.370216, lng: 4.895168}},
    {name: "Rome", position:{lat: 41.902783, lng: 12.496366}},
    {name: "Helsenki", position:{lat: 60.169856, lng: 24.938379}},
    {name: "Stockholm", position:{lat: 59.329323, lng: 18.068581}},
    {name: "London", position:{lat: 51.507351, lng: -0.127758}},
    {name: "Oslo", position:{lat: 59.913869, lng: 10.752245}},
    {name: "Paris", position:{lat: 48.856614, lng: 2.352222}},
    {name: "Wien", position:{lat: 48.208174, lng: 16.373819}},
    {name: "Budapest", position:{lat: 47.497912, lng: 19.040235}},
  ];
export const icon = new L.Icon({
    iconUrl: flagIcon,
    iconRetinaUrl: flagIcon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 45),
});
export const iconSuccess = new L.Icon({
    iconUrl: flagSuccess,
    iconRetinaUrl: flagSuccess,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 45),
});
export const START = 'START';
export const SELECTED = 'SELECTED';
export const PLACED = 'PLACED';
export const END = 'END';
export const WIN = 'WIN'
export const MAX_DISTANCE = 1500;
export const MIN_DISTANCE = 50;
export const TIMER = 5000;