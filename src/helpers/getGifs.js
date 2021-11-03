import axios from "axios";

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=0cBmIOfGvNu7hNWAFGO8qgo0hIzXV07m`;
  const { data: resp } = await axios.get(url);
  //const resp = await fetch( url );
  //const { data } = await resp.json();
  console.log(resp.data);
  const gifs = resp.data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
