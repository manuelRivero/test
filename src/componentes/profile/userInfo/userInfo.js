import React from "react";

import {Col, Row, Image } from "react-bootstrap";
import profileImg from "./../../../asset/profile.png"

import styles from './userInfo.module.css';


export default function userInfo(props) {
  return (
    <div className={styles.UserInfo}>
      <Row  className="justify-content-xs-center text-sm-left" >
        <Col  xs={12} sm={8}>
          <p>{props.position}</p>
          <p><strong>{props.area}</strong></p>
          <h4><strong>{props.name}</strong></h4>

          <h3  className="mb-1">
            <strong>{props.points} </strong> 
            Puntos
          </h3>
          <p><strong>{props.awards.length} </strong>reconocimientos </p>
        </Col>
        <Col xs={12} sm={4} >
          <Image src={profileImg} fluid rounded />
        </Col>
      </Row>
    </div>
  );
}
