import hre from "hardhat";

describe("ProtoNTF", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const ProtoNTFContract = await hre.ethers.getContractFactory("ProtoNTF");
    const protoNTF = await ProtoNTFContract.deploy();

    return { protoNTF, owner, otherAccount };
  }
});
