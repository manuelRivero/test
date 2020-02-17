import React, {useState} from "react";
import styles from "./reconocimientos.module.css";
import { Table} from "react-bootstrap";
import Modal from "./../../modal/modal"

import RewardDetail from "./../../addRewad/rewardDetail/rewardDetail";

export default function Reconocimientos(props) {

  const [showModal, setShowModal] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null)

  
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const clickHandler = (e)=>{
    handleShow();
    setSelectedAward(e)
  }

    const awardsName = {
        bd: "Cumpleaños",
        cx: "Cx",
        ex: "Ee"
    }
  return (
    <div className={styles.Reconocimientos}>
      <p className={styles.Title}>Mis reconocimientos</p>
      <Table hover responsive="sm">
        <thead>
          <tr>
            <th></th>
            <th>Tipo</th>
            <th>remitente</th>
            <th>fecha</th>
          </tr>
        </thead>
        <tbody>
          {props.awards.map((award, index) => {
            return (
              <tr onClick={()=>clickHandler(award)} key={award+index}>
                <td><span className={[styles.Circle, award.type === "bd" ? styles.Yellow : styles.Blue].join(" ")}></span></td>
                <td>{awardsName[award.type]}</td>
                <td>{award.user.name}</td>
                <td>{award.date}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
          
      <Modal show={showModal} onHide={handleClose}>
          {selectedAward && <RewardDetail award={selectedAward} />}
      </Modal>
    </div>
  );
}
