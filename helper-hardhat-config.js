const networkConfig = {
    31337: {
        name: "localhost",
    },
    80001: {
        name: "mumbai",
    },
    42220: {
        name: "celo",
    },
    44787: {
        name: "alfajor",
    },
    245022934: {
        name: "neon",
    },
    245022926: {
        name: "neon-dev",
    },
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
}
