const Ballots = artifacts.require("Ballot.sol");

module.exports = function (deployer) {
  var namesOfProposal = ["dhyey", "Fenil", "Heet"];
  deployer.deploy(Ballots, namesOfProposal);
};
