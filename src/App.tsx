import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import PageMenu from "./components/PageMenu/PageMenu";
import PageLogin from "./components/PageLogin/PageLogin";

function App() {
  let navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("email")) {
      return navigate("/profile");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/profile" element={<PageMenu />}></Route>
        <Route path="/login" element={<PageLogin />}></Route>
      </Routes>
    </>
  );
}

export default App;
