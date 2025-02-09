import React, {useContext} from 'react'
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignUp from "./pages/CaptainSignUp";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper"
import UserLogout from "./pages/UserLogout"
import CaptainHome from "./pages/CaptainHome"
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper"
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
// import 'remixicon/fonts/remixicon.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/signup" element={<UserSignUp/>}/>
      <Route path="/login" element={<UserLogin/>}/>
      <Route path="/captain-signup" element={<CaptainSignUp/>}/>
      <Route path="/captain-login" element={<CaptainLogin/>}/>
      <Route path='/riding' element={<Riding />} />
      <Route path='/captain-riding' element={<CaptainRiding />} />
      
      <Route path="/home" element={
        <UserProtectedWrapper>
          <Home/>
        </UserProtectedWrapper>
      }/>
      <Route path="/user/logout" element={
        <UserProtectedWrapper>
          <UserLogout/>
        </UserProtectedWrapper>
      }/>
      <Route path="/captain-home" element={
        <CaptainProtectedWrapper>
          <CaptainHome/>
        </CaptainProtectedWrapper>
      }/>
    </Routes>
  );
}

export default App;