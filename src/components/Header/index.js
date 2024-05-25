import React from 'react'
import Search from '../Search'

import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import './styles.css'

const Header = ({setCreateNoteModal,setSearch,search}) => {
  return (
    <div className='header-container'>
      <div className='container-left'>
        <div className='left-half'>
            <div><ConfirmationNumberIcon /></div>
            <div id='keep'>DASHBOARD</div>
        </div>
        <div>
            <Search setSearch={setSearch} search={search}/>
        </div>
      </div>
      <div className='conteiner-right'>
        <div id='notes' onClick={()=> setCreateNoteModal(true)}>Add New Ticket</div>
        
        <div id='account'>A</div>
      </div>
    </div>
  )
}

export default Header
