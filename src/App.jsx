import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Body from './components/Body';
import Profile from './components/Profile';
import Feed from './components/Feed';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body/>}>
            <Route path='/feed' element={<Feed/>} />
            <Route path='/profile' element={<Profile/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App