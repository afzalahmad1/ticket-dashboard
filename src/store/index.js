import { configureStore } from "@reduxjs/toolkit";
import  ticketSlice  from "./slices/TicketSlice";

const store = configureStore({
    reducer: {
        notes: ticketSlice,
    },
})
export default store;