
const R = 6371; // Radius of the earth in km
export function calculatedIstance (latLong1, latLong2) {
    const dLat = deg2rad(latLong1.lat-latLong2.lat);  // this.deg2rad below
    const dLon = deg2rad(latLong1.lng-latLong2.lng);
    const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(latLong2.lat)) * Math.cos(deg2rad(latLong1.lat)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in km
    return distance;
}
function deg2rad(deg) {
  return deg * (Math.PI/180)
}

export function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }