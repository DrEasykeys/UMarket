import React, { useState } from "react";
import "./App.css";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import { Routes, Route } from "react-router-dom";
import FAQS from "./pages/Faqs";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Belts from "./pages/Belts";
import Bags from "./pages/Bags";
import Shoes from "./pages/Shoes";
import Jewelries from "./pages/Jewelries";
import Accessories from "./pages/Accessories";
import Fabrics from "./pages/Fabrics";
import ChatWithUs from "./pages/ChatWithUs";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";
import SearchResultPage from "./pages/SearchResultPage";

import MyContext from "./components/MyContext";
import ResultPage from "./pages/ResultPage";
import { SearchResultProvider } from "./components/SearchResultContext";
import AllProducts2 from "./pages/AllProducts2";

function App() {
  const contextValue =
    "Hello, Relax. I'm only Trying Out My Study Of useContext";

  return (
    <>
      <SearchResultProvider>
        <MyContext.Provider value={contextValue}>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/faqs" element={<FAQS />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/" element={<Home />} />
              <Route path="/belts" element={<Belts />} />
              <Route path="/bags" element={<Bags />} />
              <Route path="/shoes" element={<Shoes />} />
              <Route path="/jewelries" element={<Jewelries />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/fabrics" element={<Fabrics />} />
              <Route path="/chatwithus" element={<ChatWithUs />} />
              <Route path="/allproducts" element={<AllProducts2 />} />

              <Route path="/search" element={<SearchResultPage />} />
              <Route path="/result" element={<ResultPage />} />
            </Route>

            <Route>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </MyContext.Provider>
      </SearchResultProvider>
    </>
  );
}

export default App;
