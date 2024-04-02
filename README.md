# ProtoNTF Solidity Project

## Project Overview

ProtoNTF is a comprehensive ERC-721 (NFT) smart contract leveraging OpenZeppelin's ERC721 standard implementations, including ERC721Enumerable, ERC721Burnable, and ERC721URIStorage. This project introduces a simplified minting process allowing for the creation of unique, identifiable tokens with custom metadata stored on IPFS. It emphasizes ease of use for creators looking to deploy their own NFT collections without compromising security and flexibility.

## Features

- Full ERC-721 NFT functionality using OpenZeppelin's contracts for a secure and standard implementation.
- Custom minting function that increments token IDs for each new NFT.
- Utilizes ERC721URIStorage for linking each token to unique metadata stored on IPFS.
- Burnable tokens allowing owners to permanently remove their NFTs from circulation.
- Enumerable extension for easy tracking and listing of all minted NFTs.

## Installation

To get started with the ProtoNTF project:

1. Clone the repository to your local machine.
2. Execute `yarn install` to fetch necessary dependencies.
3. Prepare your `.env` file with relevant environment variables for secure development.

## Usage

The project is equipped with Yarn scripts to facilitate various actions:

- `yarn compile`: Compiles the smart contract code.
- `yarn test`: Executes tests to ensure contract behaves as expected.
- `yarn start`: Launches a local blockchain environment for development and testing.
- `yarn deploy:sepolia`: Deploys the NFT contract to the Sepolia Ethereum test network.
- `yarn deploy:dev`: Deploys the NFT contract to a local Ethereum network for development purposes.

## Contract Functions

- `mint`: Public function enabling users to mint a new NFT to their address.
- `_setTokenURI`: Internal function to assign a unique metadata URL to each token.
- `supportsInterface`: Ensures compatibility with different ERC-721 interfaces.

## Requirements

- Node.js installed on your system.
- Yarn or npm for managing project dependencies.
- Hardhat as the development framework for tasks like compilation, testing, and deployment.

## Configuration

Configuration details such as network settings and private keys are managed within the `hardhat.config.js` file. Ensure your `.env` file is correctly set up with the necessary parameters before deploying or testing the contract.

## Contributing

Contributions to improve ProtoNTF are highly appreciated. Please fork the repository, create a feature branch for your proposed changes, and submit a pull request for review.

## License

ProtoNTF is made available under the MIT license, promoting open and flexible use of the code.
