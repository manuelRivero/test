import React from 'react';
import { Modal } from 'react-bootstrap';
import iconClose from "./../../asset/icon-close.svg";



export default function ModalContent(props) {

  const styles = {
    iconClose:{
    position: 'absolute',
    right: '10px',
    top: '10px',
    cursor:'pointer',
    zIndex:"2"
}}

const closeHanler=()=>{
  props.onHide()

}
  return (
    <>
     <Modal show={props.show} centered  onHide={props.onHide}>
     <img src={iconClose} style={styles.iconClose} onClick={closeHanler} alt="close icon"/>
         {props.children}
      </Modal>
    </>
  );
}
