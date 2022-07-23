const networkConfig = {
    31337: {
        name: "localhost",
    },
    80001: {
        name: "polygon",
        lpOracle:0x831753DD7087CaC61aB5644b308642cc1c33Dc13,
        weth:0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619,
    },
    80001: {
        name: "mumbai",
        lpOracle:0x8954AfA98594b838bda56FE4C12a09D7739D179b,
        weth:0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa,
    },
    42220: {
        name: "celo",
        lpOracle:0x1c8E0F6e5619C50Aafc9214cBBCfC5D2Fb3BF6c1 ,
        weth:0x122013fd7dF1C6F636a5bb8f03108E876548b455,
    },
    44787: {
        name: "alfajor",
        /* lpOracle:,
        weth:, */
    },
    245022934: {
        name: "neon",
        lpOracle:,
        weth:,
    },
    245022926: {
        name: "neon-dev",
        lpOracle:,
        weth:,
    },
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
}
