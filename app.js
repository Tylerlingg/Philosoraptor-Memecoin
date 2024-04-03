const contractAddress = "0xA8426393b399Db677c6e181bf75038b54C7815d1";
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol_",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "donor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "DonationReceived",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "claimant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TokensClaimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "CLAIM_AMOUNT",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "CLAIM_COOLDOWN",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "donationAddress",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endOfMintingTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasClaimed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastClaimTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "makeDonation",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "newAddress",
				"type": "address"
			}
		],
		"name": "updateDonationAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

// TokenLock Contract Details
const tokenLockContractAddress = "0x248773CA6f1F357571111A4B545BfDe4c280E39B";
const tokenLockContractABI = [
	{
		"inputs": [
			{
				"internalType": "contract IERC20",
				"name": "_liquidityToken",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "unlockTime",
				"type": "uint256"
			}
		],
		"name": "Locked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Unlocked",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "liquidityToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_lockDuration",
				"type": "uint256"
			}
		],
		"name": "lockTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "locks",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "unlockTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unlockTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]; // Add the ABI for your TokenLock contract here

// Liquidity Pool Token Contract Details (ERC-20 Standard)
const liquidityTokenContractAddress = "0x9eab9deef5e446aa3bae1d0a4b6a2efc35ba1d75"; // Replace with your liquidity pool token contract address
const liquidityTokenABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
]; // Add the standard ERC-20 ABI here

let contract, tokenLockContract, liquidityTokenContract;
let userAddress;

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded");
    init();
});

function init() {
    console.log("Initializing...");
    safelyAttachEvent('connectWallet', 'click', () => { playSound(); connectWallet(); });
    safelyAttachEvent('claimTokens', 'click', () => { playSound(); claimTokens(); });
    safelyAttachEvent('makeDonation', 'click', () => { playSound(); makeDonation(); });
    safelyAttachEvent('approveTokens', 'click', () => { playSound(); approveTokens(); });
    safelyAttachEvent('lockLiquidityTokens', 'click', () => { playSound(); lockLiquidityTokens(); });

    if (typeof window.ethereum !== 'undefined') {
        console.log("Ethereum wallet detected");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        contract = new ethers.Contract(contractAddress, abi, provider);
        tokenLockContract = new ethers.Contract(tokenLockContractAddress, tokenLockContractABI, provider);
        liquidityTokenContract = new ethers.Contract(liquidityTokenContractAddress, liquidityTokenABI, provider);
    } else {
        console.error('Ethereum wallet is not detected. Please install MetaMask.');
    }
}

function safelyAttachEvent(elementId, eventType, eventHandler) {
    const element = document.getElementById(elementId);
    if (element) {
        console.log(`Attaching event to ${elementId}`);
        element.addEventListener(eventType, eventHandler);
    } else {
        console.error(`Element with ID '${elementId}' not found.`);
    }
}

async function connectWallet() {
    console.log("connectWallet function called");
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const network = await provider.getNetwork();

            // Check if the connected network is Ethereum Classic
            if (network.chainId !== 61) { // 61 is the chain ID for Ethereum Classic
                await switchToEthereumClassic();
            }

            userAddress = await provider.getSigner().getAddress();
            contract = contract.connect(provider.getSigner());
            updateWalletStatus('Wallet connected: ' + userAddress, true);
        } catch (error) {
            console.error('An error occurred during wallet connection:', error);
            updateWalletStatus('Failed to connect the wallet.', false);
        }
    } else {
        console.error('Please install MetaMask!');
        updateWalletStatus('MetaMask is not installed.', false);
    }
}

async function switchToEthereumClassic() {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x3D' }] // 0x3D is the hexadecimal representation of 61
        });
    } catch (error) {
        console.error('Error switching to Ethereum Classic:', error);
        // You might want to provide additional instructions to the user here
    }
}

async function claimTokens() {
    console.log("claimTokens function called");
    if (!userAddress) {
        updateWalletStatus('Wallet not connected.', false);
        return;
    }
    if (!contract) {
        updateWalletStatus('Contract not initialized.', false);
        return;
    }

    try {
        const tx = await contract.claimTokens();
        await tx.wait();
        updateWalletStatus('Tokens claimed successfully.', true);
	} catch (error) {
        let errorMessage = "An error occurred while trying to claim tokens.";
        if (error.data && error.data.message) {
            errorMessage = error.data.message;
        } else if (error.message) {
            errorMessage = error.message;
        }
        updateWalletStatus(errorMessage, false);
    }
}

async function makeDonation() {
    console.log("makeDonation function called");
    if (!userAddress) {
        console.error("Wallet not connected");
        updateWalletStatus('Wallet not connected.');
        return;
    }
    if (!contract) {
        console.error("Contract not initialized");
        updateWalletStatus('Contract not initialized.');
        return;
    }

    const donationAmount = document.getElementById('donationAmount').value;
    if (!donationAmount || parseFloat(donationAmount) <= 0) {
        console.error('Invalid donation amount');
        updateWalletStatus('Invalid donation amount entered.');
        return;
    }

    try {
        const tx = await contract.makeDonation({ 
            value: ethers.utils.parseEther(donationAmount) 
        });
        await tx.wait();
        console.log('Donation made successfully');
        updateWalletStatus('Donation made successfully.', true, true);
        // Add any additional logic here for post-donation success
    } catch (error) {
        console.error('Error making donation:', error);
        updateWalletStatus('Error making donation. Check the console for more details.');
        // Handle the error appropriately in the UI
    }
    
}
    
async function approveTokens() {
    console.log("approveTokens function called");
    if (!userAddress) {
        updateWalletStatus('Wallet not connected.', false);
        return;
    }

    // Retrieve the amount from the input field
	const approveTokenAmountElement = document.getElementById('approveTokenAmount');
	const amountToApprove = approveTokenAmountElement.value;

    // Check if the input is valid
    if (!amountToApprove || parseFloat(amountToApprove) <= 0) {
        updateWalletStatus('Invalid LP token amount.', false);
        return;
    }

    // Define the token lock contract address
    const tokenLockContractAddress = "0x248773CA6f1F357571111A4B545BfDe4c280E39B";
    
    // Parse the input amount to the correct unit based on token's decimals
    const lpTokenAmount = ethers.utils.parseUnits(amountToApprove, 18); // Assuming the LP token has 18 decimals

    // Ensure the provider is defined in the scope of this function
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    try {
        // Connect the liquidityTokenContract with the signer
        liquidityTokenContract = liquidityTokenContract.connect(signer);

        // Call the approve function of the LP token contract
        const tx = await liquidityTokenContract.approve(tokenLockContractAddress, lpTokenAmount);
        await tx.wait();
        updateWalletStatus(`Approval for ${amountToApprove} LP Tokens successful.`, true);
    } catch (error) {
        console.error('Error during approval:', error);
        updateWalletStatus('Error during approval. Check the console for more details.', false);
    }
}

async function lockLiquidityTokens() {
    if (!userAddress) {
        updateWalletStatus('Wallet not connected.', false);
        return;
    }

    // Retrieve the amount to lock from the input field
	const lockTokenAmountElement = document.getElementById('lockTokenAmount');
	const amountToLock = lockTokenAmountElement.value;

    // Check if the input is valid
    if (!amountToLock || parseFloat(amountToLock) <= 0) {
        updateWalletStatus('Invalid lock token amount.', false);
        return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    tokenLockContract = tokenLockContract.connect(signer);
    liquidityTokenContract = liquidityTokenContract.connect(signer);

    const lockAmount = ethers.utils.parseUnits(amountToLock, 18); // Use the user entered value
    const lockDuration = 91 * 24 * 60 * 60; // 91 days in seconds

    try {
        // Check if the tokens are already approved for the lock contract
        const allowance = await liquidityTokenContract.allowance(userAddress, tokenLockContractAddress);
        if (allowance.gte(lockAmount)) {
            // If tokens are approved, proceed to lock
            const lockTx = await tokenLockContract.lockTokens(lockAmount, lockDuration);
            await lockTx.wait();
            updateWalletStatus('Liquidity tokens locked successfully.', true);
        } else {
            updateWalletStatus('Liquidity tokens need to be approved before locking.', false);
        }
    } catch (error) {
        console.error('Error locking liquidity tokens:', error);
        updateWalletStatus('Error locking liquidity tokens. Check the console for more details.', false);
    }
}

function updateWalletStatus(statusText, isConnected, isSuccess=false) { // Added isSuccess parameter with default false
    const statusElement = document.getElementById('walletStatus');
    if (statusElement) {
        statusElement.innerText = statusText;

        // Remove existing classes first
        statusElement.classList.remove('wallet-connected', 'wallet-not-connected', 'successful-donation');
        
        // Add the appropriate class based on the status
        if (isConnected) {
            statusElement.classList.add('wallet-connected');
        } else {
            statusElement.classList.add('wallet-not-connected');
        }
        
        if (isSuccess) {
            statusElement.classList.add('successful-donation');
        }
    } else {
        console.error("Failed to find walletStatus element");
    }
}

function playSound() {
    var audio = new Audio('https://philosoraptormemecoin.xyz/DinoSound2.mp3'); // Replace with the path to your new .mp3 file
    audio.play();
}

function updateCountdown() {
    const endDate = new Date('March 29, 2024 12:00:00 GMT+0000').getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    // Calculate days, hours, minutes and seconds remaining
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    const countdownElement = document.getElementById('countdownTimer');
    if (countdownElement) {
        countdownElement.innerText = `Claim ends in: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }

    // If the countdown is finished, display a message
    if (timeLeft < 0) {
        clearInterval(updateInterval);
        countdownElement.innerText = 'Claim period has ended';
    }
}

// Update the countdown every second
const updateInterval = setInterval(updateCountdown, 1000);
