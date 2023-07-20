require("@nomicfoundation/hardhat-toolbox");

require("@nomiclabs/hardhat-ethers");



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    BinanceSmartChain: {
      chainId: 56,
      url: "https://bsc-dataseed.binance.org/",
      accounts: []
    }
  },
  solidity: {
    version: "0.8.5",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts-external",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  },
   skipFiles: [
    "node_modules/@openzeppelin/contracts/access/AccessControl.sol",
  ],
};


 
