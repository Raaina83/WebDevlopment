import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
import LudoBoard from './LudoBoard'
import ToDo from './ToDo'
import Lottery from './Lottery'
import Ticketnum from './TicketNum';
import {sum} from "./helper";
import Form from './Form'

function App() {

  let winCondn = (ticket) =>{
    return sum(ticket) === 15;
  }

  return (
    <>
      {/* <Lottery n={3} winCondn={winCondn}></Lottery> */}
      <Form></Form>
    </>
  )
}

export default App
