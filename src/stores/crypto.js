
// import { ethers } from 'ethers'
import { defineStore } from 'pinia';
// import contractABI from '../artifacts/contracts/WavePortal.sol/WavePortal.json'
// const contractAddress = '0xEb3B8A7bF4E853d11aD233e15438852Ac067e253';
import { ref } from 'vue';

export const useCryptoStore = defineStore('user', () => {
  const account = ref(null);
  const loading = ref(false);
  async function connectWallet() {
    try {
      const { ethereum } = window
      if (!ethereum) {
        alert('Must connect to MetaMask!')
        return
      }
      const myAccounts = await ethereum.request({ method: 'eth_requestAccounts' })
      localStorage.setItem('connectedAccount', myAccounts[0]);
      console.log(myAccounts);
      account.value = myAccounts[0]
    }
    catch (error) {
      console.log(error)
    }
  }

  function setLoader(value) {
    loading.value = value
  }

  return {
    setLoader,
    loading,
    connectWallet,
    account,
  }
});