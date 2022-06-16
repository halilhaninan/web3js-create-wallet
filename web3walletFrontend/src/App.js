import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Compenents/navbar";
import MainPage from "./Compenents/MainPage";
import WalletList from "./Compenents/WalletList";
import walletInfoList from "./Compenents/walletInfoList";

function App() {
  const create = () => {
    axios.post("http://127.0.0.1:3001").then((res) => {
      setWallet(res.data);
    });
  };

  const [wallet, setWallet] = useState("");
  console.log("wallet", wallet);

  return (
    <div className="App" style={{ backgroundColor: "#222222" }}>
      <div className="container-fluiid ">
        <Navbar />
        <MainPage />
        <WalletList walletInfoList={walletInfoList} />
      </div>
    </div>
  );
}

export default App;
