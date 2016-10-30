import axios from 'axios';

export const convertAddress = (address) => {
  return axios({
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    params: {
      address,
      key: 'AIzaSyDXLvbYh4moubEU_ChyobbXbC8b6EMSrKs',
    },
  })
    .then((response) => {
      // console.log("RESPONSE: ", response)
      let lng = response.data.results[0].geometry.location.lng;
      let lat = response.data.results[0].geometry.location.lat;
      // console.log("LONG: ", long);
      // console.log("LAT: ", lat);
      let coord = {
        address,
        lng,
        lat
      }
      console.log(coord)
      return coord;
    })
    .catch((err) => {
      // console.log('ERROR ', err);
      return err;
    });
};