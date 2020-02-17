import React from 'react';
import styles from './input.module.css'

export default function Input(props) {
  return (
    <>
        <div className={styles.InputGroup}>
            <input type="text" className={styles.InputArea} value={props.value}/>
            <label className={styles.Label}>{props.label}</label>
        </div>
    </>
  );
}
