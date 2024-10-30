import React from "react";


export default function User(){
  let initialName = "catanacomics";
  const [name, SetName] = React.useState(initialName);
  let initialAvatar = "assets/catanacomics.svg";
  const [avatar,SetAvatar] = React.useState(initialAvatar);

  function ChangeName(){
    let nameInput = prompt("Por favor, insira um nome")
    SetName(nameInput);
    
  }

  function ChangeAvatar(){
    let avatarInput = prompt("Por favor, insira um link para a imagem")

    SetAvatar(avatarInput);
  }

  let finalName = !name ? initialName : name;
  let finalAvatar = !avatar ? initialAvatar : avatar;

    return(
      <div className="usuario">
        <img onClick={ChangeAvatar} src={finalAvatar} alt="imagem de perfil"/>
        <div className="texto">
          <span>
            <strong>{finalName}</strong>
            <ion-icon onClick={ChangeName} name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    )
}


