import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { createStore, combineReducers } from "redux";
import userReducer from "./store/reducer/User";
import roomReducer from "./store/reducer/Room";

import { SnackbarProvider } from 'notistack';

import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import Browse from "./page/Browse/Browse";
import HotelPage from "./page/HotelPage/HotelPage";
import Account from "./page/Account/Account";
import Page404 from "./page/Page404/Page404";
import About  from "./page/About/About.js";


const App = () => {

  const rootReducer = combineReducers({
    userDetails : userReducer,
    roomDetails : roomReducer,
  });
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <Cursor/>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse/:type" element={<Browse />} />
            <Route path="/room/:roomID" element={<HotelPage />} />
            <Route path="/account" element={<Account/>} />
            <Route path="/account/:page" element={<Account/>} />
            <Route path="/about/" element={<About/>} />
            <Route path="*" element={<Page404/>}/>
          </Routes>
        </Router>
      </SnackbarProvider>
    </Provider>
  );
};

export default App;
