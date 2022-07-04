import React, { useState } from 'react';
import spray from '../img/sprayBG.png';
import Modal from '../components/Modal';
import LoginForm from '../components/LoginForm';
const LandingPage = (props, {onSubmit}) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalSubmit, setModalSubmit] = useState(false);

  function handleSubmit () {
    setModalSubmit(true);
    console.log('clicked submit: ',modalSubmit);
    setOpenModal(false);
    props.onSubmit("main");
  }
  return (
    <div className="landing">
      <h1>Monster of the Week</h1>
      <h2 onClick={() => setOpenModal(true)}>Log In</h2>
      <Modal heading="Log In" content={<LoginForm />}  negative="Cancel" affirmative="Log In" show={openModal} onSubmit={() => {handleSubmit()}} onClose={() => setOpenModal(false)}></Modal>
    </div>
  )
}
  export default LandingPage;