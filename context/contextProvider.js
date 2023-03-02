import { createContext, useState, useEffect } from "react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { contractAddress, abi } from "constants";

import { Web3Provider } from "@ethersproject/providers";

export const Web3Context = createContext();
const injected = new InjectedConnector();
export const ContextProvider = ({ children }) => {
  const { active, activate, deactivate, library: provider } = useWeb3React();
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) alert("Please Install MetaMask");
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length) {
      setCurrentAccount(accounts[0]);
      await activate(injected);
    } else {
      console.log("No Accounts Found!");
    }
  };
  const connect = async () => {
    if (!window.ethereum) alert("Please Install Metamask");
    try {
      if (active) {
        console.log(active);
        deactivate();
        setCurrentAccount("");
      } else {
        console.log("Hi", active);
        await activate(injected);
        await checkIfWalletIsConnected().then(window.location.reload());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  const contract = async () => {
    if (!window.ethereum) alert("Please Install Metamask");
    let contractRPS;
    if (active) {
      const signer = await provider.getSigner();
      contractRPS = new ethers.Contract(contractAddress[0], abi, signer);
      return contractRPS;
    }
    const providers = new Web3Provider(window.ethereum);
    contractRPS = new ethers.Contract(contractAddress[0], abi, providers);
    return contractRPS;
  };

  const start = async (address, amount) => {
    try {
      const contractR = await contract();
      await contractR.createGame(address, {
        value: ethers.utils.parseEther(amount.toString()),
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const join = async (id, amount) => {
    try {
      const contractR = await contract();
      await contractR.joinGame(id, {
        value: ethers.utils.parseEther(amount.toString()),
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const commit = async (id, moveID, word) => {
    try {
      const contractR = await contract();
      await contractR.commitMove(id, moveID, word);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const reveal = async (rid, rmoveID, rword) => {
    try {
      const contractR = await contract();
      await contractR.revealMove(rid, rmoveID, rword);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Web3Context.Provider
      value={{ connect, currentAccount, start, join, commit, reveal }}
    >
      {children}
    </Web3Context.Provider>
  );
};
