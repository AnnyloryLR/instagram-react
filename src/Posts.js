import Post from "./Post";

export default function Posts(){
  let posts = [{image:"assets/meowed.svg", alternative:"meowed", text:"meowed", mainImg:"assets/gato-telefone.svg", altMain:"gato-telefone", likedImg:"assets/respondeai.svg",
    user:"respondeai", count:101.523, altLiked:"respondeai" },
    {image:"assets/barked.svg", alternative:"barked", text:"barked", mainImg:"assets/dog.svg", altMain:"dog", likedImg:"assets/adorable_animals.svg",
    user:"adorable_animals", count:99.159, altLiked:"adorable_animals"},
    {image:"assets/meowed.svg", alternative:"meowed", text:"meowed", mainImg:"assets/gato-telefone.svg", altMain:"gato-telefone", likedImg:"assets/respondeai.svg",
    user:"respondeai", count:101.523, altLiked:"respondeai" }
  ]
  
    return(
      <div className="posts">
        {posts.map((item,i) => <Post image={item.image} alternative={item.alternative} text={item.text} mainImg={item.mainImg} altMain={item.altMain} likedImg={item.likedImg} altLiked={item.altLiked} likedText={item.likedText} user={item.user} count={item.count} key={i}/>)}
      </div>
    )
}


