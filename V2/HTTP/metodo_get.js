async function main() {
  const response = await get("https://jsonplaceholder.typicode.com/posts");
  response.map((item) => {
    console.log(`Título do id: ${item["id"]} <=> ${item["title"]}`);
  });
}

async function get(URL) {
  const response = await fetch(URL);
  return response.json();
}

main();

// COM AXIOS
//
//
// const axios = require("axios");

// async function main() {
//   const { data } = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   data.map((item) => {
//     console.log(item.title);
//   });
// }

// async function get(URL) {
//   const response = await fetch(URL);
//   return response.json();
// }

// main();

