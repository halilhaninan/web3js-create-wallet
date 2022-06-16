const express = require("express");
const app = express();
const Web3 = require("web3");
const bodyParser = require("body-parser");
const cors = require("cors");

const web3 = new Web3(
  "https://eth.getblock.io/mainnet/?api_key=e33d5bc9-a813-4e5f-9d85-d0a0eef3ea53"
);
app.use(cors());
app.post("/", (req, res) => {
  const wallets = {};

  i = 0;
  while (i < 5) {
    const wallet = web3.eth.accounts.create();
    console.log(wallet);
    wallets[wallet.address] = { secretKey: wallet.privateKey };
    i++;
  }
  res.send(wallets);
});
app.listen(3001, () => {
  console.log("port running atport number : 3000");
});
