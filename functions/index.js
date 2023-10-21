const fetch = require('cross-fetch');
const GET_ALL_SATELLITES = gql`
query GetAllSatellites {
    allSatellites {
    id
    COMMENT
    ORIGINATOR
    NORAD_CAT_ID
    OBJECT_NAME
    OBJECT_TYPE
    CLASSIFICATION_TYPE
    INTLDES
    EPOCH
    EPOCH_MICROSECONDS
    MEAN_MOTION
    ECCENTRICITY
    INCLINATION
    RA_OF_ASC_NODE
    ARG_OF_PERICENTER
    MEAN_ANOMALY
    EPHEMERIS_TYPE
    ELEMENT_SET_NO
    REV_AT_EPOCH
    BSTAR
    MEAN_MOTION_DOT
    MEAN_MOTION_DDOT
    FILE
    TLE_LINE0
    TLE_LINE1
    TLE_LINE2
    OBJECT_ID
    OBJECT_NUMBER
    SEMIMAJOR_AXIS
    PERIOD
    APOGEE
    PERIGEE
    DECAYED
    PRICE
  }
}
`;

// The URL of the other server's Apollo endpoint 
const otherServerUrl = "https://junkspace-zcpt.onrender.com/graphql";

// Make a request every 14 minutes
setInterval(async () => {
  
  const response = await fetch(graphqlEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: GET_ALL_SATELLITES, 
    })
  });
  
  const data = await response.json();
  console.log(data);
}, 14 * 60 * 1000);