import React, { useEffect, useState } from "react";
import {Row, Button, Spinner} from 'react-bootstrap';

import Input from './../input/input';
import Reward from './reward/reward';
import Loader from './../loader/loader';

import styles from './rewardControl.module.css';

const uri = "https://capi.miaeromexico.com/api/rewards";
export default function AddReward(props) {
  const [rewards, setrewards] = useState(null);
  const [selectReward, setselectReward] = useState('bd');
  const [isLoading, setIsLoading] = useState(false);
  const [isSend, setIssend] = useState(false);

  useEffect(() => {
    fetch(uri)
      .then(res => res.json())
      .then(rewards => {
          
        setrewards(rewards.response);
      })
      .catch(err => console.log(err));
  }, []);

  const selectHandler = (award)=>{
      setselectReward(award)
  }
  let rewardControl = <Loader />
  let rewardsArray = []
  let confirmacion 
  if(rewards){
    
    for (let key in rewards){
        rewardsArray.push( <Reward selected={selectReward === key} name={key} key={key} click={selectHandler} available={rewards[key].available} points={rewards[key].points} />)
    }
    rewardControl = (
      <React.Fragment>
          <h4><strong>reconocer a un colaborador</strong></h4>
          <p><strong>reconocimientos</strong></p>
          <Row className="justify-content-around">
            { rewardsArray.map ( rewards => rewards)}
          </Row>
        <Input value={props.user.email} label="correo del colaborador" />
      </React.Fragment>
    )
  
  }
  if(isSend){
    confirmacion = (
      <h4>Reconocimiento enviado!</h4>
    )
  }
 
  const clickHandler=() => {
    if(!selectReward){
      return null;
    }
    if(isSend){
      return props.hideModal();
    }
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
      setIssend(true)
    }, 1000)

  }

  return (
    <>
      <div className={styles.RewardControl}>

            { isSend ? confirmacion : rewardControl }

        <Button onClick={clickHandler} disabled={isLoading} block className={styles.Btn}>
          {isSend ? 'ACEPTAR' : isLoading ?   
          <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true" 
          />  : 
          'ENVIAR'}
        </Button>
      </div>
    </>
  );
}
