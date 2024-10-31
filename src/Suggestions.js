import Suggestion from "./Suggestion";

export default function Suggestions(){
  let suggestions = [
    {user:"bad.vibes.memes", image: "assets/bad.vibes.memes.svg", alt:"bad.vibes.memes.svg", reason:"Segue você"},
    {user:"chibirdart", image: "assets/chibirdart.svg", alt:"chibirdart", reason:"Segue você"},
    {user:"razoesparaacreditar", image: "assets/razoesparaacreditar.svg", alt:"razoesparaacreditar", reason:"Novo no Instagram"},
    {user:"adorable_animals", image: "assets/adorable_animals.svg", alt:"adorable_animals", reason:"Segue você"},
    {user:"smallcutecats", image: "assets/smallcutecats.svg", alt:"smallcutecats", reason:"Segue você"}
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

