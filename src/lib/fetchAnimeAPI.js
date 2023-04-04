var query = `
query {
  Page {
    media(isAdult: false, sort: POPULARITY_DESC) {
      id
      title {
        romaji
        english
      }
      coverImage {
        extraLarge
      }
    }
  }
}
`;

const variables = {};

var url = 'https://graphql.anilist.co',
options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query: query,
    variables: variables
  })
};

// fetch(url, options).then(handleResponse)
// .then(handleData)
// .catch(handleError);

// function handleResponse(response) {
//   return response.json().then(function (json) {
//     return response.ok ? json : Promise.reject(json);
//   });
// }

// function handleData(data) {
//   console.log(data);
// }

// function handleError(error) {  
//   alert('Error, check console');
//   console.error(error);
// }

export {url, options};