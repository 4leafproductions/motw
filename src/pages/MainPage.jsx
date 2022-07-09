import React, { useState } from 'react';
import spray from '../img/sprayBG.png';
import w3test from '../img/w3logo.png';
import face from '../img/face.png';
import rules from '../img/ledger.png';
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
  const Polaroids = (props) =>{
    return(
      <div className="polaroidHolder">
        <div className="polaroid paper hoverIcon">
          
          <img className="polaroidImg" src={props.image}/>
          <div className="polaroidLabel">{props.label}</div>
        </div>
        <PaperStack/>
      </div>
    )
  }
  const SidePanel = (props) =>{
    return(
      <div className="sidePanel concrete">
        <div className="mainHeader sprayed">
          <h2>{props.header}</h2>
        </div>
        {props.content}
        {props.button}
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
        <div className="mainLeft">
          <SidePanel header="Hunters" content={<Polaroids label="hunterName    7/7/2022" image={face}/>} button={<AddEntity message="Create a Hunter" colorDiv="redDiv"/>}/>
          <SidePanel header="Keepers" button={<AddEntity message="Create a Series" colorDiv="redDiv"/>}/>
          
        </div>
        
        <div className="mainContent concrete">
          <div className="mainHeader sprayed">
            <h2>Series Select</h2>
          </div>
          <ResultsTable header={header} results={seriesResults}></ResultsTable>
          
        </div>
        <div className="mainRight ">
          <SidePanel header="Rules" content={<img className="hoverIcon" src={rules} width="160"/>}/>
        </div>
      </div>
      
    </>
  )
}
  export default MainPage;