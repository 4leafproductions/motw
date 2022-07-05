import React, { useState } from 'react';
import spray from '../img/sprayBG.png';
import Modal from '../components/Modal';
import HeaderNav from '../components/HeaderNav';
import ResultsTable from '../components/ResultsTable';
import './Main.css';
const MainPage = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const header = ['Series', 'Keeper'];
  const seriesResults = [
    {id: 1, name: 'Hello World Series', keeper: 'coolKeeper'},
    {id: 2, name: 'Another Series', keeper: 'veryCoolKeeper'}
  ];
  return (
    <>
      <HeaderNav></HeaderNav>
      <div className="mainContent paper">
        <div className="mainHeader sprayed">
          <h2>Series Select</h2>
        </div>
        <ResultsTable header={header} results={seriesResults}></ResultsTable>
      </div>
    </>
  )
}
  export default MainPage;