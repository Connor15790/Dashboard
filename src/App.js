import { useState } from 'react'
import './App.css'
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Users from './pages/Users';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<Users />} />
      </Routes>
    </Router>
  )
}

export default App