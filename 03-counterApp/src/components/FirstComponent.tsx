

export const FirstComponent = ({title, subtitle = 32}: any) => {

   
 
    console.log(title);


    return (
        
        <>
            <h1> {title} {subtitle} </h1>
            <p>soy un subtitulo</p>
            <p> {1+2} </p>
        </>
    )
}


