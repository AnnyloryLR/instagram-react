export default function Stories(){
  let stories = [{image:"assets/img/9gag.svg", alternative:"9gag" , text:"9gag"},
    {image:"assets/meowed.svg", alternative:"meowed", text:"meowed"},
    {image:"assets/barked.svg", alternative:"barked", text:"barked"},
    {image:"assets/nathanwpylestrangeplanet.svg", alternative:"nathanwpylestrangeplanet", text:"nathanwpylestrangeplanet"},
    {image:"assets/wawawicomics.svg", alternative:"wawawicomics", text:"wawawicomics"},
    {image:"assets/respondeai.svg", alternative:"respondeai", text:"respondeai"},
    {image:"assets/filomoderna.svg", alternative:"filomoderna", text:"filomoderna"},
    {image:"assets/memeriagourmet.svg" ,alternative:"memeriagourmet", text:"memeriagourmet"}

]
    return(
        <div className="stories">
            { stories.map( (item,i) => <Story image={item.image} alternative ={item.alternative} text ={item.text} key={i} />)}
            <div className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div> 
    )
}


function Story({image, alternative, text}){
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



