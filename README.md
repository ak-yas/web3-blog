## Simple fullstack web3 blog with CMS

> This codebase goes along with this tutorial [The Complete Guide To Full Stack Web3 Development](https://dev.to/dabit3/the-complete-guide-to-full-stack-web3-development-4g74)

To deploy this app:

1. Clone this repository

```sh
git clone git@github.com:ak-yas/web3-blog.git
```

2. Install the dependencies

```sh
yarn install
```

3. Run the local node

```sh
npx hardhat node
```

4. Deploy to localhost

```sh
npx hardhat run scripts/deploy.js --network localhost
```

5. Start the app

```sh
yarn start
```
