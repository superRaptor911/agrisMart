import Web3 from "web3";
declare var window: any;

export const getWeb3 = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      return new Web3(window.ethereum);
    } catch (e) {
      /* handle error */
      console.error("eth::getWeb3", e);
    }
  }
  return false;
};

export const weiToEth = (value: string) => {
  return Web3.utils.fromWei(value);
};
