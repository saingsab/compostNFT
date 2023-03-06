import { ethers } from "ethers";

function connectContract(contractAddress, contractABI) {
  let Contract;
  let Provider;
  try {
    const { ethereum } = window;
    //checking for eth object in the window
    if (ethereum) {
      Provider = new ethers.providers.Web3Provider(ethereum);
      const signer = Provider.getSigner();
      Contract = new ethers.Contract(contractAddress, contractABI, signer); // instantiating new connection to the contract
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return { Contract, Provider };
}

export default connectContract;