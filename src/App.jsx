import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Body from './components/Body';
import Profile from './components/Profile';
import Login from './components/Login';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Feed from './components/Feed';
import LandingPage from './components/Landing';

const App = () => {
  return (
    <Provider store={appStore}>
    <BrowserRouter>
      <Routes>
        {/* open an outlet in the body */}
        <Route path='/' element={<Body/>}>    
            <Route index element={<LandingPage/>} />
            <Route path='login' element={<Login/>} />
            <Route path='feed' element={<Feed/>}/>
            <Route path='profile' element={<Profile/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App