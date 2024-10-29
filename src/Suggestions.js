export default function Suggestions(){
  let suggestions = [
    {user:"bad.vibes.memes", image: "assets/img/bad.vibes.memes.svg", alt:"bad.vibes.memes.svg", reason:"Segue você"},
    {user:"chibirdart", image: "assets/img/chibirdart.svg", alt:"chibirdart", reason:"Segue você"},
    {user:"razoesparaacreditar", image: "assets/img/razoesparaacreditar.svg", alt:"razoesparaacreditar", reason:"Novo no Instagram"},
    {user:"adorable_animals", image: "assets/img/adorable_animals.svg", alt:"adorable_animals", reason:"Segue você"},
    {user:"smallcutecats", image: "assets/img/smallcutecats.svg", alt:"smallcutecats", reason:"Segue você"}
  ]
  
  return(
    <div class="sugestoes">
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
        {suggestions.map((s,i) => <Suggestion user={s.user} image={s.image} alt={s.alt} reason={s.reason}/>)}
    </div>
  )
    
}

function Suggestion({user, image, alt, reason}){
  return(
    <div class="sugestao">
     <div class="usuario">
      <img src={image} alt={alt}/>
      <div class="texto">
        <div class="nome">{user}</div>
        <div class="razao">{reason}</div>
      </div>
     </div>
     <div class="seguir">Seguir</div>
    </div>
  )
}