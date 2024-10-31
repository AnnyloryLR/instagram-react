export default function Suggestion({user, image, alt, reason}){
    return(
      <div className="sugestao">
       <div className="usuario">
        <img src={image} alt={alt}/>
        <div className="texto">
          <div className="nome">{user}</div>
          <div className="razao">{reason}</div>
        </div>
       </div>
       <div className="seguir">Seguir</div>
      </div>
    )
}