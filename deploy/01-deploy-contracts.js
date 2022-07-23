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

    const vault = await deploy("MyModule", {
        from: deployer,
        args: [iManager],
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
    await iSwap.initialize(
        networkConfig[chainId]["token"],
        networkConfig[chainId]["symbol"],
        networkConfig[chainId]["address"],
        networkConfig[chainId]["vault"],
        "1000",
        isLib.address,
        iManager.address,
        access.address
    )
    await iSwap.init(
        networkConfig[chainId]["tokenAdd"],
        networkConfig[chainId]["denorms"]
    )

    if (!developmentChains.includes(network.name)) {
        log("Verifying...")
        await verify(
            iSwap.address,
            [],
            "contracts/oracle/PriceOracle.sol:PriceOracle"
        )
        await verify(
            vault.address,
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
