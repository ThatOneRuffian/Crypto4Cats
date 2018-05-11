pragma solidity 0.4.23;

contract cryptyo4Cats{
    
    mapping (address => uint256) public balanceOf;
    
    address public contractAddress;
    address public webFund;
    address public localCatDonate;
    address public largeOrg;
    
    
    constructor(address _webFund, address _localCatDonate, address _largeOrg) public{
        
        require( _webFund != 0 && _localCatDonate  != 0 && _largeOrg != 0); //Make sure addresses are non-zero.
        
        //Assign addresses.
        webFund = _webFund;                 
        localCatDonate = _localCatDonate;
        largeOrg = _largeOrg;
        
    }
    
    
    event DonationFeed( address donor,  uint256 tokenCount,  uint256 currentBlock ); //Datafeed for web3 interface.
    
    event writeLog( string msg ); //Write message to EVM log.
    
    
    function() public payable{ //ETH donations.

        writeLog("Payment Received. Thank you."); 
    }
    
    
}