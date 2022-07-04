import React, { useState } from 'react';
import spray from '../img/sprayBG.png';
import Modal from '../components/Modal';
import LoginForm from '../components/LoginForm';
const LandingPage = (props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="landing">
      <h1>Monster of the Week</h1>
      <h2 onClick={() => setOpenModal(true)}>Log In</h2>
      <Modal heading="Log In" content={<LoginForm />}  negative="Cancel" affirmative="Log In" show={openModal} onClose={() => setOpenModal(false)}></Modal>
    </div>
  )
}
  export default LandingPage;