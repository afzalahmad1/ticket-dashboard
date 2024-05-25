import { createSlice } from "@reduxjs/toolkit";

let local = JSON.parse(localStorage.getItem("tickets")) || [];
// console.log("local",local);
const ticketSlice = createSlice({
  name: "tickets",
  initialState: [...local],
  reducers: {
    createTicket(state,action){
      state.push(action.payload)
      localStorage.setItem("tickets",JSON.stringify(state))
    },
    deleteTicket(state,action){
      console.log("store", action.payload);
      state.splice(action.payload,1)
      localStorage.setItem("tickets",JSON.stringify(state))
    },
    // editNote(state,action){
    //   console.log("store",action.payload);
    //   state[action.payload.index].title = action.payload.title;
    //   state[action.payload.index].note = action.payload.note;
    //   localStorage.setItem("notes",JSON.stringify(state))
    // },
    // changeColor(state,action){
    //   console.log("store",action.payload.index);
    //   state[action.payload.index].color = action.payload.color;
    //   localStorage.setItem("notes",JSON.stringify(state))
    // }
  }
});

// console.log(productsSlice.actions);
export default ticketSlice.reducer;
export const { createTicket,deleteTicket } = ticketSlice.actions; 