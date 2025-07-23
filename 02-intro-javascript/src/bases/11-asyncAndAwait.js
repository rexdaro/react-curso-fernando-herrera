// const getImagenPromesa = () => {
//   const promesa = new Promise((resolve, reject) => {

//     resolve('https://ajajsdjajdsjadj.com')
//   })

//   return promesa
// }


// getImagenPromesa().then(console.log);



const getImagen = async() => {

try {
  const apiKey =  'LMx3Bpe3xL04VhUF0IxG44XnRmd1X8VP';
  const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
  const {data} = await resp.json();
    
  const {url} = data.images.original

  console.log(url)

    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  
} catch (error) {
  console.error(error);
}
}



getImagen()



