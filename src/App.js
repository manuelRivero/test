import React, {useState, useEffect} from 'react';
import Hero from './componentes/hero/hero'
import './App.css';
import Profile from './componentes/profile/profile';

import {Container, Row, Button, Col} from 'react-bootstrap'
import Modal from './componentes/modal/modal';
import AddReward from './componentes/addRewad/addReward';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

   // for fetch user info 
   useEffect(() => {
    let uri = "https://capi.miaeromexico.com/api/user";
    const user = JSON.stringify({ email: "jgarciab@aeromexico.com" });
    fetch(uri, {
      method: "POST",
      body: user,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(({ response }) => {
        setUser(response);
      })
      .catch(err => {
        console.log(err);
      });
  },[]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  

  return (
    <div className="App">
      <Container className="">
        <Row >
          <Hero />
        </Row>
        <Row className="justify-content-sm-center">
          <Col xs="12" sm="10" md="8" lg="6">
            <Profile user={user}/>
          </Col>
        </Row>
        <Row className="justify-content-sm-center mt-4">
          <Col xs="12" sm="10" md="8" lg="6">
          <Button size="lg" block onClick={handleShow} style={{borderRadius:"15px", backgroundColor:"var(--azul)"}}>DAR RECONOCIMIENTO</Button>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose}>
      <AddReward user={user} hideModal={handleClose}/>
      
      </Modal>
    </div>
  );
}

export default App;
