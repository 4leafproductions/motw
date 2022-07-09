import React, { useState } from 'react';
import Modal from '../components/Modal';
//***Rulebook PDFs

//Hunter Playbooks
import pbChosen from '../files/playbooks/playbook_Chosen.pdf';
import pbCrooked from '../files/playbooks/playbook_Crooked.pdf';
import pbDivine from '../files/playbooks/playbook_Divine.pdf';
import pbExpert from '../files/playbooks/playbook_Expert.pdf';
import pbFlake from '../files/playbooks/playbook_Flake.pdf';
import pbInitiate from '../files/playbooks/playbook_Initiate.pdf';
import pbMonstrous from '../files/playbooks/playbook_Monstrous.pdf';
import pbMundane from '../files/playbooks/playbook_Mundane.pdf';
import pbProfessional from '../files/playbooks/playbook_Professional.pdf';
import pbSpellSlinger from '../files/playbooks/playbook_SpellSlinger.pdf';
import pbSpooky from '../files/playbooks/playbook_Spooky.pdf';
import pbWronged from '../files/playbooks/playbook_Wronged.pdf';
import pbAll from '../files/playbooks/AllPlaybooks.pdf';
import fullBook from '../files/playbooks/FullRulebook.pdf';
import hunterReference from '../files/playbooks/HunterReference.pdf';
import keeperReference from '../files/playbooks/KeeperReference.pdf';
import mysteryWorksheet from '../files/playbooks/MysteryWorksheet.pdf';
const RulesModal = ({onClose, show}) => {
    const ModalBody = (props) => {
        return(
            <>
            <p>Complete Guidebook</p>
            <a href={fullBook} target="_blank">Monster of the Week</a>
            <hr/>
            <div className="modalLayout">
                <div className="modalHalf">
                    <p>Hunters</p>
                    <ul>
                        <li><a href={pbAll} target="_blank">Complete Hunter Playbook</a></li>
                        <li><a href={hunterReference} target="_blank">Hunter Reference</a></li>
                    </ul>                    
                </div>
                <div className="modalHalf">
                    <p>Keepers</p>
                    <ul>
                        <li><a href={keeperReference} target="_blank">Keeper Reference</a></li>
                        <li><a href={mysteryWorksheet} target="_blank">Mystery Worksheet</a></li>
                    </ul>  
                </div>
                
            </div>
            </>
            
            
        )
    }

    return(
        <Modal heading="Rules & Guides" content={<ModalBody />} negative="Close" show={show} onClose={onClose}></Modal>
    )
}
export default RulesModal;