export default function Story({image, alternative, text}){
    return(
      <div className="story">
        <div className="imagem">
          <img src={image} alt={alternative}/>
        </div>
        <div className="usuario">
           {text}
        </div>
      </div>
  
  
    )
  
  }
  