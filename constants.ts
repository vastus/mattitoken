export const SEPOLIA_RPC_URL = getEnv("SEPOLIA_RPC_URL");
export const WALLET_PRIVATE_KEY = getEnv("WALLET_PRIVATE_KEY");

function getEnv(name: string): string {
  const value = process.env[name];

  if (value === undefined) {
    throw new Error(`Environment variable ${name} is not set`);
  }

  return value;
}
