const fetch = require('cross-fetch');

// The URL of the other server's Apollo endpoint 
const otherServerUrl = "https://junkspace-zcpt.onrender.com/graphql";

// Make a request every 14 minutes
setInterval(async () => {
  const query = `{
    exampleQuery {
      exampleField
    }
  }`;
  
  const response = await fetch(otherServerUrl, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({query})
  });
  
  const data = await response.json();
  console.log(data);
}, 14 * 60 * 1000);