// utils/geocode.js
const axios = require('axios');

async function geocodeLocation(locationString) {
  try {
    const response = await axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        q: locationString,
        format: 'json',
        limit: 1
      },
      headers: {
        'User-Agent': 'MajorProject/dev (deadpoolacc4games@gmail.com)' // Nominatim requires this
      }
    });

    const data = response.data[0];
    if (!data) return null;

    return {
      lat: parseFloat(data.lat),
      lng: parseFloat(data.lon)
    };
  } catch (err) {
    console.error('Geocoding error:', err);
    return null;
  }
}

module.exports = geocodeLocation;
