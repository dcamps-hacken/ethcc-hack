require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
require("solidity-coverage")
require("hardhat-deploy")
require("./tasks/invest.js")

module.exports = {
    solidity: {
        compilers: [
            { version: "0.8.4" },
            { version: "0.8.0" },
            { version: "0.8.6" },
            { version: "0.7.6" },
            { version: "0.6.10" },
        ],
    },
    defaultNetwork: "hardhat",
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
        mumbai: {
            url: process.env.MUMBAI_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
            chainId: 80001,
        },
        matic: {
            url: process.env.POLYGON_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
            chainId: 137,
            gas: 3000000,
            gasPrice: 300000000000,
            blockGasLimit: 10000000,
        },
        neonlabs: {
            url: process.env.NEON_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
            network_id: 245022926,
            chainId: 245022926,
            gas: 30000000,
            gasPrice: 10000000000,
            blockGasLimit: 100000000,
            allowUnlimitedContractSize: false,
            timeout: 1000000,
            isFork: true,
        },
        celo: {
            url: process.env.CELO_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
            chainId: 42220,
        },
    },
    etherscan: {
        apiKey: {
            polygon: process.env.POLYGONSCAN_API_KEY,
            polygonMumbai: process.env.POLYGONSCAN_API_KEY,
            celo: process.env.CELOSCAN_API_KEY,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        user: {
            default: 1,
        },
    },
}
