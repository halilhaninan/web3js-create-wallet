import React from "react";
import Card from "./Card";
import "./WalletList.css";

const WalletList = ({ card, walletInfoList }) => {
  return (
    <div id="ethwalletlist" className="container-fluid ">
      <div className="row">
        <div id="walletlist" className="container text-white">
          <h1 id="walletlisth1" className="p-1">
            Ethereum Wallets
            <p id="walletlistheader">Showing 40 Ethereum wallets below</p>
          </h1>
          <div className="row  p-5">
            {walletInfoList.map((item) => (
              <Card {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletList;
