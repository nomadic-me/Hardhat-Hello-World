require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

const { API_URL_GOERLI, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: API_URL_GOERLI,
      accounts: [PRIVATE_KEY]
    }
  }    
};
