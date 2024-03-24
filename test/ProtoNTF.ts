import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("ProtoNTF", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const ProtoNTFContract = await hre.ethers.getContractFactory("ProtoNTF");
    const protoNTF = await ProtoNTFContract.deploy();

    return { protoNTF, owner, otherAccount };
  }

  it("Should has name and symbol", async function () {
    const { protoNTF } = await loadFixture(deployFixture);

    expect(await protoNTF.name()).to.equal("ProtoNTF");
    expect(await protoNTF.symbol()).to.equal("PNTF");
  });

  it("Should mint a token", async function () {
    const { protoNTF, owner } = await loadFixture(deployFixture);

    await protoNTF.mint();

    const ownerBalance = await protoNTF.balanceOf(owner.address);
    const ownerOfToken = await protoNTF.ownerOf(1);
    const totalSupply = await protoNTF.totalSupply();

    expect(ownerBalance).to.equal(1);
    expect(ownerOfToken).to.equal(owner.address);
    expect(totalSupply).to.equal(1);
  });

  it("Should has URI metadata", async function () {
    const { protoNTF } = await loadFixture(deployFixture);

    await protoNTF.mint();

    const tokenURI = await protoNTF.tokenURI(1);

    expect(tokenURI).to.equal("https://gateway.pinata.cloud/ipfs/QmZ/1.json");
  });

  it("Should support interface", async function () {
    const { protoNTF } = await loadFixture(deployFixture);

    expect(await protoNTF.supportsInterface("0x80ac58cd")).to.equal(true);
  });
});
