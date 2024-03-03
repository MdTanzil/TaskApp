

import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import TaskSheet from './components/task/TaskSheet'
import TaskAdd from './components/task/TaskAdd'

function App() {
const [isModalShow, setIsModalShow] = useState(false);

  return (
    <div className= {`bg-[#191D26] font-[Inter] text-white flex justify-center flex-col `}>
      <Header></Header>
      <div className=' flex flex-col justify-center items-center'>
        {isModalShow && <TaskAdd></TaskAdd>}
      <Hero></Hero>
      <TaskSheet setIsModalShow={setIsModalShow}></TaskSheet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
