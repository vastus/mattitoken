import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import { SEPOLIA_RPC_URL, WALLET_PRIVATE_KEY } from "./constants";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
    },
  },
};

export default config;
