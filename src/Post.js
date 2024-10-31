import React from 'react';

export default function Post({image, alternative, text, mainImg, altMain, likedImg, altLiked, user, count}){
    let initialHeart = "heart-outline";
    const [heart,SetHeart] = React.useState(initialHeart)
    let initialClass = "";
    const [classHeart, SetClass] = React.useState(initialClass)
    let initialBookmark = "bookmark-outline";
    const [bookmark, SetBookmark] = React.useState(initialBookmark)
    let initialCount = count;
    const [realCount, SetCount] = React.useState(initialCount)
  
  
    function Like(){
      if(heart === initialHeart){
        SetHeart("heart");
        SetClass("filled")
        let finalCount = initialCount+0.001
        SetCount(finalCount.toFixed(3));
      } else{
        SetHeart(initialHeart);
        SetClass(initialClass);
        SetCount(initialCount);
      }
    }
    function LikeImg(){
      if(heart === initialHeart){
        SetHeart("heart");
        SetClass("filled");
        let finalCount = initialCount+0.001
        SetCount(finalCount.toFixed(3));
      }
    }
  
    function SavePost(){
      if(bookmark === initialBookmark){
        SetBookmark("bookmark")
      } else {
        SetBookmark(initialBookmark)
      }
    }
  
  
    return(
      <div className="post">
              <div className="topo">
                <div className="usuario">
                  <img src={image} alt={alternative}/>
                  {text}
                </div>
                <div className="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>
              <div className="conteudo">
                <img onClick={LikeImg} src={mainImg} alt={altMain}/>
              </div>
              <div className="fundo">
                <div className="acoes">
                  <div>
                    <ion-icon onClick={Like} class={classHeart} name={heart}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon onClick={SavePost} name={bookmark} ></ion-icon>
                  </div>
                </div>
                <div className="curtidas">
                  <img src={likedImg} alt={altLiked}/>
                  <div className="texto">
                   Curtido por <strong>{user}</strong> e <strong>outras {realCount} pessoas</strong>
                  </div>
                </div>
              </div>
      </div>
    )
  
}
  