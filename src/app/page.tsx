import ContractComponents from "./contract-components-page/contract-components";
import Contract from "./contract-page/contract";

export default function Home() {
  return <div className="flex h-screen">
    <ContractComponents />
    <Contract />
  </div>;
}
