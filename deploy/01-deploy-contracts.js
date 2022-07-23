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
    /* Initialize price oracle (swap router address) */
    await oracle.initialize(networkConfig[chainId]["lpOracle"])

    const access = await deploy("AccessController", {
        from: deployer,
        args: [],
        log: true,
    })

    const mod = await deploy("MyModule", {
        from: deployer,
        args: [deployer],
        log: true,
    })

    argsIM = [access.address, networkConfig[chainId]["lpOracle"], mod.address]
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

    /* Deploy IndexSwap
        Initialize 
        Update rate
    */
    const iSwap = await deploy("IndexSwap", {
        from: deployer,
        args: [],
        log: true,
    })
    for (let i = 0; i < networkConfig[chainId]["tokenSymb"].length; i++) {
        await iSwap.initialize(
            networkConfig[chainId]["tokenNames"][i],
            networkConfig[chainId]["tokenSymb"][i],
            address _outAsset,
            mod.address,
            uint256 _maxInvestmentAmount,
            isLib.address,
            iManager.address,
            access.address
        )
    }

    if (!developmentChains.includes(network.name)) {
        log("Verifying...")
        await verify(
            iSwap.address,
            [],
            "contracts/oracle/PriceOracle.sol:PriceOracle"
        )
        await verify(
            mod.address,
            [deployer],
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
    log("--------------------------")
}

module.exports.tags = ["all", "tokens"]
