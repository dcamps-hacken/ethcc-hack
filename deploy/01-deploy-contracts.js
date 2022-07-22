const { developmentChains, networkConfig } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify.js")

module.exports = async ({ deployments, getNamedAccounts }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const access = await deploy("AccessController", {
        from: deployer,
        args: [],
        log: true,
    })

    const iManager = await deploy("IndexManager", {
        from: deployer,
        args: [],
        log: true,
    })

    const iSwap = await deploy("IndexManager", {
        from: deployer,
        args: [],
        log: true,
    })

    const isLib = await deploy("IndexSwapLibrary", {
        from: deployer,
        args: [],
        log: true,
    })

    if (!developmentChains.includes(network.name)) {
        log("Verifying...")
        await verify(
            access.address,
            [],
            "contracts/AccessController.sol:AccessController"
        )
        await verify(
            iManager.address,
            [],
            "contracts/IndexManager.sol:IndexManager"
        )
        await verify(iSwap.address, [], "contracts/IndexSwap.sol:IndexSwap")
        await verify(
            isLib.address,
            [],
            "contracts/IndexSwapLibrary.sol:IndexSwapLibrary"
        )
    }
    log("--------------------------")
}

module.exports.tags = ["all", "tokens"]
