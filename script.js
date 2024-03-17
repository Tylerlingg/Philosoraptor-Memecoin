let walletConnected = false;

async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            document.getElementById('walletStatus').innerText = 'Wallet connected';
            walletConnected = true;
            document.getElementById('claimTokensButton').disabled = false;
        } catch (error) {
            console.error(error);
            document.getElementById('walletStatus').innerText = 'Error connecting wallet';
        }
    } else {
        alert("Please install MetaMask!");
    }
}

async function claimTokens() {
    if (!walletConnected) {
        alert("Please connect to MetaMask first!");
        return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your contract address
    const contractABI = []; // Replace with your contract ABI
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    try {
        const transaction = await contract.claimTokens();
        await transaction.wait();
        document.getElementById('claimStatus').innerText = "Tokens claimed successfully!";
    } catch (error) {
        console.error(error);
        document.getElementById('claimStatus').innerText = "Error claiming tokens.";
    }
}

document.getElementById('connectWalletButton').addEventListener('click', connectWallet);
document.getElementById('claimTokensButton').addEventListener('click', claimTokens);
