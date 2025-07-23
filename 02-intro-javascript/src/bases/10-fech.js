console.log('Hola mundo!!');

const apiKey =  'LMx3Bpe3xL04VhUF0IxG44XnRmd1X8VP';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then(resp => resp.json())
.then(({data}) => {  
  const {url} = data.images.original
  console.log(url)

  const img = document.createElement('img');
  img.src = url;

  document.body.appendChild(img);
})

.catch(err => console.warn(err));