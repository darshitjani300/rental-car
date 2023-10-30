import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { MyContext } from "./Helper/contextApi";

function App() {
  const [formData, setFormData] = useState({
    carName: " ",
    pickuploc: " ",
    dropoffloc: " ",
    pickdate: " ",
    dropdate: " "
  });
  const [popUpForm, setPopUpForm] = useState(false);
  useEffect(() => {
    popUpForm
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [popUpForm]);
  return (
    <>
      <MyContext.Provider
        value={{ formData, setFormData, popUpForm, setPopUpForm }}
      >
        <Home />
      </MyContext.Provider>
    </>
  );
}

export default App;
