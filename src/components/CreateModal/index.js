import React, { useState } from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import "./styles.css";
import { useDispatch } from "react-redux";
import { createTicket } from "../../store/slices/TicketSlice";
const CreateModal = ({ setCreateNoteModal }) => {
  const [note, setNote] = useState({
    title: "",
    description: "",
    email: "",
  });

  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
    console.log(note);
  };
  const handleSubmitTicket = () => {
    if(!note.email || !note.description || !note.title){
      alert("All fields are mandatory")
      return;
    }else{
      dispatch(createTicket(note));
    setCreateNoteModal(false);
    setNote({
      title: "",
      description: "",
      email: "",
    });
    }
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close">
          <h2>Create Ticket....</h2>
          <div onClick={() => setCreateNoteModal(false)}>
            <ClearRoundedIcon />
          </div>
        </div>
        <div className="inputs">
          <div className="input-flex">
            <label htmlFor="email">User Email</label>
            <input
              type="email"
              name="email"
              value={note.email}
              onChange={handleInputChange}
              id="email"
            />
          </div>
          <div className="input-flex">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={note.title}
              id="title"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-flex">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              value={note.description}
              onChange={handleInputChange}
              id="description"
              cols="30"
              rows="5"
            ></textarea>
          </div>
        </div>

        <div id="create-note" onClick={handleSubmitTicket}>
          Submit Ticket
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
