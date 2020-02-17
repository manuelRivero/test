import React from 'react';
import heroImg from './../../asset/logo-reconocimientos.png'
import styles from './hero.module.css'
import {Image} from 'react-bootstrap'

export default function componentName() {
  
  return (
      <div className={styles.Hero}>
          <Image src={heroImg} fluid />
      </div>
  );
}
