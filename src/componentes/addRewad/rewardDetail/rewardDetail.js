import React from "react";
import Input from './../../input/input'

import styles from './rewardDetail.module.css'

import Reward from "./../reward/reward";

export default function RewardDetail(props) {
  return (
    <>
      <div className={styles.RewardDetail}>
        <Reward name={props.award.type} available />
        <Input value={props.award.text} label="mensaje"/>
        <div className={styles.Details}>
          <p className={styles.Gray}>Enviado por: <span className={styles.Blue}><strong>{props.award.user.name}</strong></span></p>
          <p className={styles.Gray}>recibido el: <span className={styles.Blue}><strong>{props.award.date}</strong></span></p>
        </div>
       </div>
    </>
  );
}
