import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ProtoNTFModule = buildModule("ProtoNTF", (m) => {
  const protoNTF = m.contract("ProtoNTF");

  return { protoNTF };
});

export default ProtoNTFModule;
