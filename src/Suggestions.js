export default function Suggestions(){
  let suggestions = [
    {user:"bad.vibes.memes", image: "assets/img/bad.vibes.memes.svg", alt:"bad.vibes.memes.svg", reason:"Segue você"},
    {user:"chibirdart", image: "assets/img/chibirdart.svg", alt:"chibirdart", reason:"Segue você"},
    {user:"razoesparaacreditar", image: "assets/img/razoesparaacreditar.svg", alt:"razoesparaacreditar", reason:"Novo no Instagram"},
    {user:"adorable_animals", image: "assets/img/adorable_animals.svg", alt:"adorable_animals", reason:"Segue você"},
    {user:"smallcutecats", image: "assets/img/smallcutecats.svg", alt:"smallcutecats", reason:"Segue você"}
  ]
  
  return(
    <div className="sugestoes">
        <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
        {suggestions.map((s,i) => <Suggestion user={s.user} image={s.image} alt={s.alt} reason={s.reason} key={i}/>)}
    </div>
  )
    
}

function Suggestion({user, image, alt, reason}){
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