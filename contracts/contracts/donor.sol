//SPDX-License-Identifier: ISC
pragma solidity ^0.8.17;
contract Donnor{
    //set donnor id as the wallet address
    address donnor_id;
    struct donor{
        string first_name;
        string last_name;
        string email;
        string blood_group;
        uint age;
}
    //mapping to store the donnor details
    mapping(address => donor) donnor_details;
    //event to be emitted when donnor details are added
    event DonorAdded(address donnor_id);
    //function to add donnor details
    function addDonor(string memory _first_name, string memory _last_name, string memory _email, string memory _blood_group, uint _age) public{
        donnor_id = msg.sender;
        donnor_details[donnor_id].first_name = _first_name;
        donnor_details[donnor_id].last_name = _last_name;
        donnor_details[donnor_id].email = _email;
        donnor_details[donnor_id].blood_group = _blood_group;
        donnor_details[donnor_id].age = _age;
        emit DonorAdded(donnor_id);
    }
    //function to get donnor details using donnor id
    function getDonor(address _donnor_id) public view returns(string memory, string memory, string memory, string memory, uint){
        return (donnor_details[_donnor_id].first_name, donnor_details[_donnor_id].last_name, donnor_details[_donnor_id].email, donnor_details[_donnor_id].blood_group, donnor_details[_donnor_id].age);
    }
}

