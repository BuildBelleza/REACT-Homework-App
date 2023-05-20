import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import { Home, About, Projects, Contact, Error } from "./components"

import "./App.css"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Projects />} />
        <Route path="/" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App