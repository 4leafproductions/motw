import React, { useState } from 'react';
import RulesModal from '../components/RulesModal';
import rules from '../img/ledger.png';

const IconRulebook = (props) => {
    const [openModal, setOpenModal] = useState(false);
    return(
        <>
            <img className="hoverIcon" src={rules} width="160" onClick={() => setOpenModal(true)}/>
            <RulesModal show={openModal} onClose={() => setOpenModal(false)}/>
        </>
        
    )
}
export default IconRulebook;