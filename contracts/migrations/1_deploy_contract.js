//deploy the contract
var donnor = artifacts.require("Donnor");
var receiver = artifacts.require("Receiver");
model.exports = function(deployer) {
    deployer.deploy(donnor);
    deployer.deploy(receiver);
}
