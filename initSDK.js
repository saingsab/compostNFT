import { Network, Alchemy } from "alchemy-sdk";
  
const initSdk = async () => {
  const settings = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
    network: Network.ETH_GOERLI, // Replace with your network.
  };
  const alchemy = new Alchemy(settings);

  return alchemy;
}

export default initSdk;
