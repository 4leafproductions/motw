import React, { useState } from 'react';
import spray from '../img/sprayBG.png';
import Modal from '../components/Modal';
import HeaderNav from '../components/HeaderNav';
import ResultsTable from '../components/ResultsTable';
import PaperStack from '../components/PaperStack';
import './Main.css';
const MainPage = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const header = ['Series', 'Keeper'];
  const Plus = (props) =>{
    return(
      <div class="maskPlus">
              <div className={props.colorDiv}/>
            </div>
    )
  }
  const AddEntity = (props) =>{
    return(
      <div className="darkDiv">
        <h3>{props.message}</h3>
        <Plus colorDiv={props.colorDiv}/>
      </div>
    )
  }
  const seriesResults = [
    {id: 1, name: 'Hello World Series', keeper: 'coolKeeper'},
    {id: 2, name: 'Another Series', keeper: 'veryCoolKeeper'}
  ];

  return (
    <>
      <HeaderNav></HeaderNav>
      <div className="mainLayout">
        <div className="mainLeft concrete">
          <div className="mainHeader sprayed">
            <h2>Hunters</h2>
          </div>
          <AddEntity message="Create a hunter" colorDiv="redDiv"/>
        </div>
        
        <div className="mainContent concrete">
          <div className="mainHeader sprayed">
            <h2>Series Select</h2>
          </div>
          <ResultsTable header={header} results={seriesResults}></ResultsTable>
          
        </div>
        <div className="mainRight concrete">
          <div className="mainHeader sprayed">
            <h2>Rules</h2>
          </div>
        </div>
      </div>
      
    </>
  )
}
  export default MainPage;