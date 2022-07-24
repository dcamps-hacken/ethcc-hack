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

-   Log into Gnosis and create a Vault.
-   Add an app called Zodiac to the vault.
-   Import Vault contract on remix and deploy it.
-   Verify the contract on polygon.
-   Open the Zodiac app and add a custom module. Paste the vault contract address.

## Smart Contract Deployment:

-   Deploy the AcessController.sol
-   Deploy the IndexManager.sol
-   Deploy the IndexSwap.sol
-   Deploy the IndexSwapLibrary.sol
-   Initialise the smart contracts.

## Deploy a Fund:

-   Create an array of the tokens. Eg: [address1,address2]
-   Create an array of weights. The weights are in bips thus **_20%_** will be denoted with **_2000_**. Eg: [5000,5000]
-   Make the IndexManager an owner of the vault by calling **addOwner()** function in the MyModule.sol.

## Usage:

-   Call the **InvestInFund()** and **Withdrawal()** functions. Before calling the **Withdrawal()** function we need to give permission to the contracts to access the fund token.
-   Change the gas fees to a higher number to prevent transactions from failing due to _out of gas error_.

## Investment Demo:

-   Investment Tx Hash(Tenderly): https://dashboard.tenderly.co/tx/polygon/0x4466dcde99fdef76b76c7b55fe27d3641207f47e4a7c73c1ea611f19e6606330
-   Withdrawal Tx Hash(Tenderly): https://dashboard.tenderly.co/tx/polygon/0x7740b7bac663ef3583b22c82b7bac3c125a523ae6e0a18740661db0ca6217984

# NEON CONTRACTS

### Without right Router

"PriceOracle" at 0x6379Bbf89b7d39E2D668fbB129Dfe358b63183CA <br>
"AccessController" at 0xf716448FfF384Db9B73Be0A9eA9e865530F6C3A4 <br>
"MyModule" at 0xc795F563598d7053bEd4bAcefA3A15F808F6799B <br>
"IndexSwapLibrary" at 0xb8Aa858D05362853324f1188838a50fB589049AB <br>
"IndexManager" at 0xe1F7149d20D275844A52bdE063FDa70a88e13F85 <br>
"IndexSwap" at 0xF733B56eD395EA04e4E9A9516b1Dd5cb21F19101 <br>

### With MoraSwap router:

"PriceOracle" at 0x43a6550B66C4Fc9C8256b43727617a4FfCc5EF7B <br>
"AccessController" at 0x5F94f304d8779fE32FbD901f8B0D0e7391871330 <br>
"MyModule" at 0xFC563a1EcE148AA86758243418F0165582B2d51c <br>
"IndexSwapLibrary" at 0x9C3aA76b58D45ECdA4a831BFc50e03Aa27023400 <br>
"IndexManager" at 0xD3b005d4ad5541Ca4a3ceF8ff85fAdf8E2d9eD39 <br>
"IndexSwap" at 0xB094C1db8D60c86bb5B41309A7FacC6aC046bED9 <br>

# NEON TEST

> the testing of the contracts is in process, you may encounter errors

Run the tests with the following command in the CLI:

```
yarn hardhat test --network neonlabs
```
