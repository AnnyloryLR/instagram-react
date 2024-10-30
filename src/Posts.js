import React from 'react';

export default function Posts(){
  let posts = [{image:"assets/img/meowed.svg", alternative:"meowed", text:"meowed", mainImg:"assets/img/gato-telefone.svg", altMain:"gato-telefone", likedImg:"assets/img/respondeai.svg",
    user:"respondeai", count:101.523, altLiked:"respondeai" },
    {image:"assets/img/barked.svg", alternative:"barked", text:"barked", mainImg:"assets/img/dog.svg", altMain:"dog", likedImg:"assets/img/adorable_animals.svg",
      user:"adorable_animals", count:99.159, altLiked:"adorable_animals"},
      {image:"assets/img/meowed.svg", alternative:"meowed", text:"meowed", mainImg:"assets/img/gato-telefone.svg", altMain:"gato-telefone", likedImg:"assets/img/respondeai.svg",
        user:"respondeai", count:101.523, altLiked:"respondeai" }
  ]
  
    return(
      <div className="posts">
        {posts.map((item,i) => <Post image={item.image} alternative={item.alternative} text={item.text} mainImg={item.mainImg} altMain={item.altMain} likedImg={item.likedImg} altLiked={item.altLiked} likedText={item.likedText} user={item.user} count={item.count} key={i}/>)}
      </div>
    )
}


function Post({image, alternative, text, mainImg, altMain, likedImg, altLiked, user, count}){
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
