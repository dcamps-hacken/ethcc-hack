
# Smart Contract

## Addresses:

**TOP 5 DeFi Fund:** 
```
IndexSwap Contract Address: 0x108D3698E8F70Bc6F06E883fD2a6B8DD4B7Beb4A
Gnosis Safe Vault Address: 0x047267377DEb8DC5578C2498e3b8f09656c273cD
Tokens Included : MAKER(MKR), UNISWAP(UNI), CHAINLINK(LINK), AAVE(AAVE), COMPOUND(COMP)
```
**Metaverse Fund:**
```
IndexSwap Contract Address: 0x779e509992B3c04773a570601cAB47B6Ead0C508
Gnosis Safe Vault Address: 0xC70F486805a7B04867AcF0f72154C7443FD0ca01
Tokens Included: SANDBOX(SAND), DECENTRALAND(MANA), AAVEGOTCHI(GHST)
```


 


# Deployment

## Gnosis safe:

- Log into Gnosis and create a Vault.
- Add an app called Zodiac to the vault.
- Import Vault contract on remix and deploy it.
- Verify the contract on polygon.
- Open the Zodiac app and add a custom module. Paste the vault contract address.

## Smart Contract Deployment:
- Deploy the AcessController.sol 
- Deploy the IndexManager.sol
- Deploy the IndexSwap.sol
- Deploy the IndexSwapLibrary.sol
- Initialise the smart contracts.

## Deploy a Fund:
- Create an array of the tokens. Eg: [address1,address2]
- Create an array of weights. The weights are in bips thus ***20%*** will be denoted with ***2000***. Eg: [5000,5000]
- Make the IndexManager an owner of the vault by calling **addOwner()** function in the MyModule.sol.

## Usage: 
- Call the **InvestInFund()** and **Withdrawal()** functions. Before calling the **Withdrawal()** function we need to give permission to the contracts to access the fund token.
- Change the gas fees to a higher number to prevent transactions from failing due to *out of gas error*.

## Investment Demo:
- Investment Tx Hash(Tenderly): https://dashboard.tenderly.co/tx/polygon/0x4466dcde99fdef76b76c7b55fe27d3641207f47e4a7c73c1ea611f19e6606330
- Withdrawal Tx Hash(Tenderly): https://dashboard.tenderly.co/tx/polygon/0x7740b7bac663ef3583b22c82b7bac3c125a523ae6e0a18740661db0ca6217984

