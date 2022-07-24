const { ethers } = require("hardhat")
const { developmentChains, networkConfig } = require("../helper-hardhat-config")

async function main() {
    const chainId = network.config.chainId

    const oracle = await ethers.getContractAt(
        "PriceOracle",
        "0x6379Bbf89b7d39E2D668fbB129Dfe358b63183CA"
    )
    console.log(
        `successfully loaded "PriceOracle" contract at ${oracle.address}`
    )

    const access = await ethers.getContractAt(
        "AccessController",
        "0xf716448FfF384Db9B73Be0A9eA9e865530F6C3A4"
    )
    console.log(
        `successfully loaded "AccessController" contract at ${access.address}`
    )

    const module = await ethers.getContractAt(
        "MyModule",
        "0xc795F563598d7053bEd4bAcefA3A15F808F6799B"
    )
    console.log(`successfully loaded "MyModule" contract at ${module.address}`)

    const indexSwapLibrary = await ethers.getContractAt(
        "IndexSwapLibrary",
        "0xb8Aa858D05362853324f1188838a50fB589049AB"
    )
    console.log(
        `successfully loaded "IndexSwapLibrary" contract at ${indexSwapLibrary.address}`
    )

    const indexManager = await ethers.getContractAt(
        "IndexManager",
        "0xe1F7149d20D275844A52bdE063FDa70a88e13F85"
    )
    console.log(
        `successfully loaded "IndexManager" contract at ${indexManager.address}`
    )

    const indexSwap = await ethers.getContractAt(
        "IndexSwap",
        "0xF733B56eD395EA04e4E9A9516b1Dd5cb21F19101"
    )
    console.log(
        `successfully loaded "IndexSwap" contract at ${indexSwap.address}`
    )

    console.log("initializing contract PriceOracle...")

    try {
        const oracleInit = await oracle.initialize(
            networkConfig[chainId]["lpOracle"]
        )
        oracleInit.wait()
    } catch (e) {
        console.log(e)
    }

    console.log("initializing contract IndexSwap...")

    try {
        const initISwap1 = await indexSwap.initialize(
            networkConfig[chainId]["token"],
            networkConfig[chainId]["symbol"],
            networkConfig[chainId]["address"],
            networkConfig[chainId]["vault"],
            ethers.utils.parseEther("1000"),
            indexSwapLibrary.address,
            indexManager.address,
            access.address
        )
        initISwap1.wait()

        const initISwap2 = await indexSwap.init(
            networkConfig[chainId]["tokenAdd"],
            networkConfig[chainId]["denorms"]
        )
        initISwap2.wait()
    } catch (e) {
        console.log(e)
    }

    console.log("adding vault as MyModule owner...")
    try {
        const addOwner = await module.addOwner(indexManager.address)
        addOwner.wait()
    } catch (e) {
        console.log(e)
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
