//SPDX-License-Identifier: ISC
pragma solidity ^0.8.17;
contract Receiver{
    //set receiver id as the wallet address
    address receiver_id;
    struct receiver{
        string first_name;
        string last_name;
        string email;
        string blood_group;
        uint age;
}
    //mapping to store the receiver details
    mapping(address => receiver) receiver_details;
    //event to be emitted when receiver details are added
    event ReceiverAdded(address receiver_id);
    //function to add receiver details
    function addReceiver(string memory _first_name, string memory _last_name, string memory _email, string memory _blood_group, uint _age) public{
        receiver_id = msg.sender;
        receiver_details[receiver_id].first_name = _first_name;
        receiver_details[receiver_id].last_name = _last_name;
        receiver_details[receiver_id].email = _email;
        receiver_details[receiver_id].blood_group = _blood_group;
        receiver_details[receiver_id].age = _age;
        emit ReceiverAdded(receiver_id);
    }
    //function to get receiver details using receiver id
    function getReceiver(address _receiver_id) public view returns(string memory, string memory, string memory, string memory, uint){
        return (receiver_details[_receiver_id].first_name, receiver_details[_receiver_id].last_name, receiver_details[_receiver_id].email, receiver_details[_receiver_id].blood_group, receiver_details[_receiver_id].age);
    }
}