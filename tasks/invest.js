task("invest", "invest 0.5 native tokens").setAction(async (taskArgs) => {
    const { deployer } = await getNamedAccounts()
    indexSwap = await ethers.getContract("IndexSwap")

    const amount = "0.5"
    const invest = await indexSwap.investInFund({
        value: ethers.utils.parseEther(amount),
    })
    invest.wait()

    /* const investFrom = await indexSwap.connect(address).investInFund({
            value: ethers.utils.parseEther("0.5"),
        }) */

    console.log(`You have successfully invested ${amount} native tokens`)
})
