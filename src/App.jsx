import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Body from './components/Body';
import Profile from './components/Profile';
import Login from './components/Login';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Feed from './components/Feed';

const App = () => {
  return (
    <Provider store={appStore}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body/>}>
            <Route path='login' element={<Login/>} />
            <Route path='feed' element={<Feed/>}></Route>
            <Route path='profile' element={<Profile/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App