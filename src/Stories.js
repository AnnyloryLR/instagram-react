export default function Stories(){
  let stories = [{image:"assets/img/9gag.svg", alternative:"9gag" , text:"9gag"},
    {image:"assets/img/meowed.svg", alternative:"meowed", text:"meowed"},
    {image:"assets/img/barked.svg", alternative:"barked", text:"barked"},
    {image:"assets/img/nathanwpylestrangeplanet.svg", alternative:"nathanwpylestrangeplanet", text:"nathanwpylestrangeplanet"},
    {image:"assets/img/wawawicomics.svg", alternative:"wawawicomics", text:"wawawicomics"},
    {image:"assets/img/respondeai.svg", alternative:"respondeai", text:"respondeai"},
    {image:"assets/img/filomoderna.svg", alternative:"filomoderna", text:"filomoderna"},
    {image:"assets/img/memeriagourmet.svg" ,alternative:"memeriagourmet", text:"memeriagourmet"}

]
    return(
        <div class="stories">
            { stories.map( (item,i) => <Story image={item.image} alternative ={item.alternative} text ={item.text} key={i} />)}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div> 
    )
}


function Story({image, alternative, text}){
  return(
    <div class="story">
      <div class="imagem">
        <img src={image} alt={alternative}/>
      </div>
      <div class="usuario">
         {text}
      </div>
    </div>


  )

}



