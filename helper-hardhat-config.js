const networkConfig = {
    31337: {
        name: "localhost",
        lpOracle: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
        weth: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
        tokenNames: ["Maker", "Uniswap", "Chainlink", "Aave", "Compound"],
        tokenSymb: ["mkr", "uni", "link", "aave", "comp"],
        tokenAdd: [
            "0x6f7C932e7684666C9fd1d44527765433e01fF61d",
            "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
            "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
            "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
            "0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c",
        ],
    },
    137: {
        name: "polygon",
        lpOracle: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
        weth: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
        tokenNames: ["Maker", "Uniswap", "ChainLink Token", "Aave", "Compound"],
        tokenSymb: ["MKR", "UNI", "LINK", "AAVE", "COMP"],
        tokenAdd: [
            "0x6f7C932e7684666C9fd1d44527765433e01fF61d",
            "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
            "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
            "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
            "0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c",
        ],
    },
    /* 80001: {
        name: "mumbai",
        lpOracle: "0x8954afa98594b838bda56fe4c12a09d7739d179b",
        weth: "0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa",
        mkr:,
        uni:,
        link:"0x70d1F773A9f81C852087B77F6Ae6d3032B02D2AB",
        aave:,
        comp:,
    }, */
    42220: {
        name: "celo",
        lpOracle: "0x1c8e0f6e5619c50aafc9214cbbcfc5d2fb3bf6c1",
        weth: "0x122013fd7df1c6f636a5bb8f03108e876548b455",
        tokenNames: [
            "Ubeswap",
            "Celo native asset",
            "SushiToken",
            "Wrapped Bitcoin",
            "USD Coin",
        ],
        tokenSymb: ["UBE", "CELO", "SUSHI", "BTC", "USDC"],
        tokenAdd: [
            "0x00Be915B9dCf56a3CBE739D9B9c202ca692409EC",
            "0x471EcE3750Da237f93B8E339c536989b8978a438",
            "0x29dFce9c22003A4999930382Fd00f9Fd6133Acd1",
            "0xD629eb00dEced2a080B7EC630eF6aC117e614f1b",
            "0xef4229c8c3250C675F21BCefa42f58EfbfF6002a",
        ],
    },
    44787: {
        name: "alfajor",
        /* lpOracle:,
        weth:, */
    },
    /* 245022934: {
        name: "neon",
        lpOracle:,
        weth:,
    },
    245022926: {
        name: "neon-dev",
        lpOracle:,
        weth:,
    }, */
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
}
