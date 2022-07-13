# Hardhat-Smart-Contract-Template
Simple Template created

## Setting up the environment
https://hardhat.org/tutorial/setting-up-the-environment


### MacOS

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install 18
nvm use 18
nvm alias default 18
npm install npm --global # Upgrade npm to the latest version
```

## Creating a new Hardhat project
https://hardhat.org/tutorial/creating-a-new-hardhat-project

```bash
npm init
npm install --save-dev hardhat
npx hardhat
```
Select ```Create an empty hardhat.config.js``` with your keyboard and hit enter.


### Plugins

```bash
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

Add the highlighted line to your ```hardhat.config.js``` so that it looks like this:
```js
require("@nomicfoundation/hardhat-toolbox");
```

## Writing and compiling smart contracts

https://hardhat.org/tutorial/writing-and-compiling-contracts#4.-writing-and-compiling-smart-contracts


## Testing Contracts

https://hardhat.org/tutorial/testing-contracts

## Debugging with Hardhat Network

https://hardhat.org/tutorial/debugging-with-hardhat-network

## Deploying to a live network

https://hardhat.org/tutorial/deploying-to-a-live-network

### Loading Environment Variabls

```bash
npm install dotenv --save
```

#### Output for ```npx hardhat run scripts/deploy.js --network goerli```

```
Deploying contracts with the account: 0xEC783571BD926875c024a025a6812fB4E894ba08
Account balance: 2957500000000000000
Token address: 0x9A87983E2321cBf4f6E7E4e8d2dB3F6BE74b742C
```