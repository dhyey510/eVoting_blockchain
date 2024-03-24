# Blockchain eVoting Application

Introducing the Blockchain eVoting Application, where cutting-edge blockchain technology meets the cornerstone of democracy. Our platform offers users a secure and transparent space to participate in elections, enabling them to vote for candidates, delegate their voting rights, and access comprehensive election summaries. But we don't stop there – we've introduced a decentralized marketplace for purchasing NFTs representing political parties.

## Features

### Admin Panel

- **Reset Button**: Resets the entire voting process, requiring users to request voting rights again.
- **End Vote**: Stops the current ballot and displays the winner. Prevents further voting.
- **Summary**: Displays the current election status, including candidate list and live vote count.
- **Pause / Continue**: Allows the admin to pause or resume the election process.
- **NFT Management**: Admin can mint and list NFTs representing political parties for sale.

### Voter Interface

- **Voting**: Users can vote for candidates or choose NOTA if they prefer.
- **Give Me Right**: Users must request voting rights from the admin and have sufficient Ethereum balance.
- **Delegate**: Users can delegate their voting rights to others.
- **NFT Marketplace**: Users can buy NFTs representing political parties.

## Installation

To run the application, follow these steps:

1. Open Ganache for local blockchain network.
2. Run `truffle compile` command in the terminal.
3. Change contract addresses of Market, Ballot, and NFT in the `index.js` file from Ganache.
4. Run `truffle migrate` command.
5. Run `index.html` file. It will connect the website with MetaMask.

## Screenshots

Include screenshots showcasing the UI and functionality of your application here.

## Technologies Used

- **Solidity**: Smart contract language for developing blockchain applications.
- **HTML/CSS/JavaScript**: Used for developing the web interface.
- **Truffle**: Development framework for Ethereum smart contracts.
- **Ganache**: Local blockchain network for testing.
- **Metamask**: Ethereum wallet for interacting with the blockchain.
- **Web3.js**: JavaScript library for interacting with Ethereum blockchain.

## License

This project is licensed under the [MIT License](LICENSE).
