import React, { useState } from "react";
import "./MainPage.css";
import ethh from "../image/ethh.webp";
import cw from "../image/cw.webp";
import axios from "axios";

const MainPage = ({}) => {
  const create = () => {
    axios.post("http://127.0.0.1:3001").then((res) => {
      setWallet(res.data);
    });
  };
  const [wallet, setWallet] = useState("");
  console.log("wallettttt", wallet);
  console.log("objectttkeysss", Object.keys(wallet));

  return (
    <div className="container-fluid ">
      <div className="row">
        <img id="wallpaper" className="img-responsive" src={ethh} alt="eth" />
      </div>
      <div className="row">
        <div id="welcome" className="col-md p-5">
          <h1 id="welcomeh1">Welcome to Ethereum </h1>
          Ethereum is the community-run technology powering the cryptocurrency
          ether (ETH) and thousands of decentralized applications.
        </div>
      </div>
      <div className="row">
        <div id="cwleft" className="col-md-8 text-white p-5">
          <div id="cwlefttext" className="col-md-10">
            <span id="cwleft1">
              Ethereum wallets are applications that let you interact with your
              Ethereum account. Think of it like an internet banking app without
              the bank. Your wallet lets you read your balance, send
              transactions and connect to applications. You need a wallet to
              send funds and manage your ETH.
            </span>
          </div>
          <div className="cold-md-2 pt-5">
            <button
              id="cwsubmit"
              className="btn btn-info"
              onClick={() => {
                create();
              }}>
              Create your wallet
            </button>
            <h6 id="head">Your wallet Address & Pwkey</h6>
            <div id="bar">
              <div id="red"></div>
              <div id="yellow"></div>
              <div id="green"></div>
            </div>
            <div id="screen">
              <div id="walletlistterminal" className="col-md-12 row">
                <p className="font text-white">root@10.0.0.1:~$</p>

                <p className="d-flex justify-content-start">
                  <strong className="font text-success"> const &ensp; </strong>
                  <strong className="font text-warning">Wallet&ensp;</strong>
                  =&nbsp;&nbsp;&nbsp;
                  <strong className="font text-danger">Web3</strong>.&ensp;
                  <strong className="font text-info">eth</strong>.&ensp;
                  <strong className="font text-white"> accounts </strong>&ensp;
                  <strong className="font text-success"> .create(); </strong>
                  &ensp;
                </p>
                {Object.keys(wallet).map((item) => (
                  <div className="row">
                    <p id="wallet" className="font text-white" id="wallet">
                      <strong className="font text-success"> Wallet: </strong>
                      {item}
                    </p>
                    <p id="pwkey" className="font text-white" id="wallet">
                      <strong className="font text-danger"> Pwkey: </strong>
                      {wallet[item].secretKey}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="cwright" className="col-md-4 text-white p-5">
          <img id="cw2" className="img-responsive" src={cw} alt="cw" />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
