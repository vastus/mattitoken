// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Matti is ERC20 {
    constructor(uint256 initialSupply) ERC20("Matti", "MATTI") {
        _mint(msg.sender, initialSupply);
    }
}
