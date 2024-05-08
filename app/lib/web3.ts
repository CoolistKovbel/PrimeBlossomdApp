import { ethers } from "ethers";
import dApp from "./nftcontract.json";
import tokenAbs from "./abs.json";

export const contractTokenContract =
  "0xDA9d107dEa05318194100B8780b03EbDcC5D1E78";
export const ContractNFTCollection =
  "0xA4dA441ad248C2990866666eF4a90FDA82D562Fd";

export const getEthereumObject = () => {
  return typeof window !== "undefined" ? window.ethereum : null;
};

export const getEthereumAccount = async () => {
  try {
    const ethereum: Window = getEthereumObject();

    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      return account;
    } else {
      alert("connect your metamask account....");

      // Setup another alert
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const mintNFT = async (_amount: any) => {
  try {
    console.log("minting nft", _amount);

    const amountInWei = ethers.utils.parseEther(_amount.toString())

    console.log("amountInWei", ethers.utils.formatEther(ethers.BigNumber.from(amountInWei).mul(ethers.utils.parseEther("0.0210"))));


    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      ContractNFTCollection,
      dApp,
      signer
    );

    await contractInstance.mint(_amount, {
      value: amountInWei,
      gasLimit: 300000,
    });


  } catch (error) {
    console.log(error);
  }
};

export const swapToken = async (_amount: any) => {
  try {
    console.log("swapping token");

    const amountInWei = ethers.utils.parseEther(_amount.toString());

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      ContractNFTCollection,
      tokenAbs,
      signer
    );

    await contractInstance.swapEtherForTokens({
      value: amountInWei,
      gasLimit: 600000,
    });
  } catch (error) {
    console.log(error);
  }
};
