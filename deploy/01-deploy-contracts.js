const { ethers } = require("hardhat")
const { developmentChains, networkConfig } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify.js")

module.exports = async ({ deployments, getNamedAccounts }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    const oracle = await deploy("PriceOracle", {
        from: deployer,
        args: [],
        log: true,
    })

    /* oracleC = await ethers.getContract("PriceOracle")
    const oracleInit = await oracleC.initialize(
        networkConfig[chainId]["lpOracle"]
    )
    oracleInit.wait() */

    const access = await deploy("AccessController", {
        from: deployer,
        args: [],
        log: true,
    })

    const vault = await deploy("MyModule", {
        from: deployer,
        args: [networkConfig[chainId]["vault"]],
        log: true,
    })

    argsIM = [access.address, networkConfig[chainId]["lpOracle"], vault.address]
    const iManager = await deploy("IndexManager", {
        from: deployer,
        args: argsIM,
        log: true,
    })

    const isLib = await deploy("IndexSwapLibrary", {
        from: deployer,
        args: [],
        log: true,
    })

    const iSwap = await deploy("IndexSwap", {
        from: deployer,
        args: [],
        log: true,
    })

    /* iSwapC = await ethers.getContract("IndexSwap")

    const initISwap1 = await iSwapC.initialize(
        networkConfig[chainId]["token"],
        networkConfig[chainId]["symbol"],
        networkConfig[chainId]["address"],
        networkConfig[chainId]["vault"],
        ethers.utils.parseEther("1000"),
        isLib.address,
        iManager.address,
        access.address
    )
    initISwap1.wait() */

    /* const initISwap2 = await iSwapC.init(
        networkConfig[chainId]["tokenAdd"],
        networkConfig[chainId]["denorms"]
    )
    initISwap2.wait() */

    /* vaultC = await ethers.getContract("MyModule")
    const addOwner = await vaultC.addOwner(iManager.address)
    addOwner.wait() */

    /* if (!developmentChains.includes(network.name)) {
        log("Verifying...")
        await verify(
            oracle.address,
            [],
            "contracts/oracle/PriceOracle.sol:PriceOracle"
        )
        await verify(
            vault.address,
            [networkConfig[chainId]["vault"]],
            "contracts/vault/MyModule.sol:MyModule"
        )
        await verify(
            access.address,
            [],
            "contracts/access/AccessController.sol:AccessController"
        )
        await verify(
            iManager.address,
            argsIM,
            "contracts/core/IndexManager.sol:IndexManager"
        )
        await verify(
            iSwap.address,
            [],
            "contracts/core/IndexSwap.sol:IndexSwap"
        )
        await verify(
            isLib.address,
            [],
            "contracts/core/IndexSwapLibrary.sol:IndexSwapLibrary"
        )
    }
    log("--------------------------") */
}

module.exports.tags = ["all", "tokens"]
