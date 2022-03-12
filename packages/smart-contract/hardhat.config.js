require('@nomiclabs/hardhat-waffle')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/j8V8WCYPLCcH8Fe3z6AvYTlftElG233F",
      accounts: [
        "ef7c3fecced3681f347f507461033d5897605dd3c360b968cf976435bb460dc6",
      ],
    },
  },
};
