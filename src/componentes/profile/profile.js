import React, { useState} from "react";

import { Card } from "react-bootstrap";

import UserInfo from "./userInfo/userInfo";
import Reconocimientos from "./reconocimientos/reconocimientos";
import ToggleBtn from "./toggleBtn/toggleBtn";
import Loader from "./../loader/loader";

export default (props) => {
  const [showReconocimientos, setShowReconocimientos] = useState(false);
  const [showAnimacion, setShowAnimacion] = useState(false);

  const clickHandler = () => {
    showReconocimientos && setShowReconocimientos(false)
    setShowAnimacion( oldValue => !oldValue);
  }

  const animationEndHandler= ()=>{
    showAnimacion && setShowReconocimientos(true) 
  }
  let userProfile = <Loader />;

  if ( props.user) {
    userProfile = (
      <React.Fragment>
        <UserInfo {...props.user} />
       { showReconocimientos && <Reconocimientos awards={props.user.awards} />}
        <ToggleBtn click={clickHandler} isOpen={showReconocimientos}/>
      </React.Fragment>
    );
  }

  return (

    <Card className={showAnimacion? "abrir" : "cerrar"} style={{borderRadius:'15px'}} onAnimationEnd={animationEndHandler} >
      {userProfile}
    </Card>
     
  );
};
