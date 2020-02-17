import React from 'react';
import ArrowDown from '../../../asset/icon-arrow-down.svg'
import styles from './toggleBtn.module.css'

export default function ToggleBtn(props) {
  let title= props.isOpen ? "cerrar reconocimientos" :"ver reconocimientos"
  
  return (
      <div className={styles.ToggleBtn} onClick={props.click}>
          <p>{title}</p>
            <img src={ArrowDown} className={[styles.Btn, props.isOpen ? styles.Close : styles.Open ].join(" ")}alt=""></img>
      </div>
  );
}
