import {React , useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import { useAuth } from "./context/GlobalState";
import { auth } from "./firebase";
import NotFound from './components/NotFound';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Payment from './components/Payment';

function App() {
  const { dispatch } = useAuth();  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);  
  return (
    <div className='app'>
      
      <Routes>
        <Route path='/' element={<> <Header /> <Home /> </>} />
        <Route path='/payment' element={<> <Header /> <Payment /> </>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Checkout" element={ <>
        <Header />
        <Checkout />
        </> } />
        <Route path="*" element={<NotFound />} />        
      </Routes>
    </div>
  )
}

export default App

