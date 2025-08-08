   export const getGif = async(category) => {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=cEKPU0ZD9nZzeH1scNR7zMPNkFM0bduW&q=${category}&limit=10`;
        const resp = await fetch(url);
        const {data} = await resp.json();
        
        const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }))

        console.log(gifs);
        const imagenes = gifs;
        
        return imagenes;
    }