const { assert } = require("chai")
const { ethers } = require("hardhat")

describe("IndexManager", function () {
    let deployer
    beforeEach(async function () {
        deployer = (await getNamedAccounts()).deployer
        indexManager = await ethers.getContract("IndexManager", deployer)
    })
    describe("constructor", async function () {
        it("sets variables properly", async function () {
            const ac = await indexManager.accessController()
            assert.equal(
                ac.toString(),
                "0xf716448FfF384Db9B73Be0A9eA9e865530F6C3A4"
            )
        })
    })
    describe("receive", async function () {
        it("allows contract to receive native token", async function () {
            const provider = indexManager.provider
            const initBalance = await provider.getBalance(indexManager.address)
            const amount = ethers.utils.parseEther("0.5").toHexString()
            const tx = [
                {
                    to: indexManager.address,
                    value: amount,
                },
            ]
            const sendTx = await deployer.sendTransaction(tx)

            const newBalance = await provider.getBalance(indexManager.address)
            console.log(newBalance.toString())
        })
    })
})
