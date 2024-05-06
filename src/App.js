import styled from "styled-components"
import { Home } from "./pages/Home"
import { TradeIn } from "./pages/TradeIn";
import { TestDrive } from "./pages/TestDrive"
import { Navbar } from "./components/Navbar"
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ModelS } from "./pages/ModelS";
import { ComingSoon } from "./pages/ComingSoon";

const App = () => {
  const [navbarColor, setNavbarColor] = useState("#171a20")
  const [blur, setBlur] = useState("")
  const [navbarPosition, setNavbarPosition] = useState("fixed")
    const [more, setMore] = useState("back")
    useEffect(() => {
      if(blur === "unblur"){
        setTimeout(() => {
            setBlur("")
            setMore("back")
        }, 310);
      }
    }, [blur])
  return (
    <AppContainer>
      <Router>
        <Navbar color={navbarColor} blur={blur} more={more} position={navbarPosition} setBlur={setBlur} setMore={setMore}/>
        <Routes>
          <Route exact path="/" element={<Home setNavbarColor={setNavbarColor} setBlur={setBlur} setMore={setMore} setNavbarPosition={setNavbarPosition}/>} />
          <Route exact path="/tradein" element={<TradeIn setNavbarColor={setNavbarColor} setBlur={setBlur} setMore={setMore} setNavbarPosition={setNavbarPosition}/>} />
          <Route exact path="/drive" element={<TestDrive setNavbarColor={setNavbarColor} setBlur={setBlur} setMore={setMore} setNavbarPosition={setNavbarPosition}/>} />
          <Route exact path="/models" element={<ModelS setNavbarColor={setNavbarColor} setBlur={setBlur} setMore={setMore} setNavbarPosition={setNavbarPosition}/>} />
          <Route exact path="/comingsoon" element={<ComingSoon setNavbarColor={setNavbarColor} setBlur={setBlur} setMore={setMore} setNavbarPosition={setNavbarPosition}/>} />
        </Routes>
      </Router>
    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div`

`