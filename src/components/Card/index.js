import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import "./styles.css";
const Card = ({filterData,search,setDeleteNoteModal,setIndex}) => {
  const tikcets = useSelector((state) => {
    return state.notes;
  });

  const handleDelete=(idx)=>{
    // console.log(idx);
    setDeleteNoteModal(true)
    setIndex(idx)
    
  }




  return (
    <div className="card-Container">
      {search ?
        filterData.map((card, idx) => {
          return (
            <div key={idx} className="card" >
              <h2>Email: {card.email}</h2>
              <p>{card.title}</p>
              <p>{card.description}</p>
              <div className="icons">
                <div onClick={()=>handleDelete(idx)}><DeleteForeverRoundedIcon fontSize="small"/></div>
              </div>
            </div>
          );
        }):
        tikcets.map((card,idx)=>{
            return (
                <div key={idx} className="card" >
                  <p><strong>Email: </strong> {card.email}</p>
                  <p><strong>Title: </strong> {card.title}</p>
                  <p><strong>Description: </strong> {card.description}</p>
                  <div className="icons">
                    <div id="delete" onClick={()=>handleDelete(idx)}><DeleteForeverRoundedIcon fontSize="small"/></div>
                  </div>
                </div>
              );
        })
        }
    </div>
  );
};

export default Card;
