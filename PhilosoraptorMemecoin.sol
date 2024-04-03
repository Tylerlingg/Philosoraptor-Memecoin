// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title Philosoraptor Memecoin
 * An ERC20 token with a claim feature, allowing addresses to claim a fixed amount of tokens once.
 * It includes a cooldown period between claims. Additionally, it provides a separate donation feature.
 */
contract Philosoraptor is ERC20, ReentrancyGuard {
    mapping(address => bool) public hasClaimed;
    address payable public owner;
    address payable public donationAddress; // New variable for the donation address
    uint256 public lastClaimTime;

    uint256 public constant CLAIM_AMOUNT = 10000 * 1e18;
    uint256 public constant CLAIM_COOLDOWN = 2 minutes;
    uint256 public endOfMintingTime = 1711713600; // March 29th, 2024 at 12:00 PM GMT in Unix timestamp

    event TokensClaimed(address claimant, uint256 amount);
    event DonationReceived(address donor, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(string memory name_, string memory symbol_) ERC20(name_, symbol_) {
        owner = payable(msg.sender); // Set the contract deployer as the owner
        donationAddress = payable(0x166963d11ce7Fd4b56b35fE197638D19862fEf92); // Set initial donation address
    }

    /**
     * @dev Allows users to make donations in ETH.
     */
    function makeDonation() public payable {
        require(msg.value > 0, "Donation must be greater than 0");
        donationAddress.transfer(msg.value); // Transfer donation to the new address
        emit DonationReceived(msg.sender, msg.value);
    }

    /**
     * @dev Allows addresses to claim tokens, subject to a cooldown period.
     */
    function claimTokens() public nonReentrant {
        require(block.timestamp < endOfMintingTime, "Minting period has ended");
        require(block.timestamp >= lastClaimTime + CLAIM_COOLDOWN, "Cooldown period active");
        require(!hasClaimed[msg.sender], "Tokens already claimed");

        _mintInternal(msg.sender, CLAIM_AMOUNT);
        hasClaimed[msg.sender] = true;
        lastClaimTime = block.timestamp;

        emit TokensClaimed(msg.sender, CLAIM_AMOUNT);
    }

    /**
     * @dev Allows the owner to renounce their ownership of the contract.
     */
    function renounceOwnership() public onlyOwner {
        owner = payable(address(0));
    }

    /**
     * @dev Internal function to handle minting of tokens.
     * @param account The account to receive the minted tokens
     * @param amount The amount of tokens to mint
     */
    function _mintInternal(address account, uint256 amount) internal {
        require(account != address(0), "Mint to the zero address");
        _mint(account, amount);
    }

    // Optional: Function to update the donation address by the owner
    function updateDonationAddress(address payable newAddress) public onlyOwner {
        donationAddress = newAddress;
    }
}