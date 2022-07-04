import React, { useState } from 'react';
import spray from '../img/sprayBG.png';
import Modal from '../components/Modal';
import HeaderNav from '../components/HeaderNav';
import './Main.css';
const MainPage = (props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <HeaderNav></HeaderNav>
      <div className="mainContent paper">
        <div className="mainHeader sprayed">
          <h2>Series Select</h2>
        </div>
      </div>
    </>
  )
}
  export default MainPage;