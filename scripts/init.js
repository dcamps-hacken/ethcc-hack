const { developmentChains, networkConfig } = require("../helper-hardhat-config")
const { ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    await deployments.fixture(["all"])

    abc = await ethers.getContract("abc")
}

// Call the main function
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
