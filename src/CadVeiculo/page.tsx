import RodapeCad from "@/components/RodapeCad";
import DadosVeiculo from "@/DadosVeiculo";
import Filtro from "@/Filtro";
import Fluido from "@/Fluido";
import Historico from "@/Historico/page";
import Observacao from "@/Relatos/Obs";
import Cabecalho from "@/components/Cabecalho";
import { HeaderVec } from "@/styled";

export default function CadVeiculo() {
  return (
    <>
      <Cabecalho />
    

      <HeaderVec>
        <h1>
          <strong>CADASTRE O VEÍCULO</strong>
        </h1>
        <p>Preencha os campos com os dados do veículo</p>
      </HeaderVec>

      <form action="cadastro veiculo" method="get">
        <DadosVeiculo />
        <Filtro />
        <Fluido />
        <Historico />
        <Observacao />
      </form>
      <RodapeCad />
    </>
  );
}
