import { MainCorpo } from "@/styled";


export default function Corpo(){

  return(

    <MainCorpo>
      <div className="container2">
        <section className="sec1">
          CADASTRO
          <div className="cliente">
            <Link to='/home/cadastrousuario'>
              <img src="/icone_cliente_preto.png" alt=""/>
            </Link>
          </div>
        </section>

        <section className="sec2">
          CADASTRO DA MECÂNICA
          <div className="mecanica">
            <Link to='/home/cadastromecanico'>
              <img src="/oficina.png" alt="" />
            </Link>
          </div>
        </section>

        <section className="sec3">
          CADASTRO DE VEÍCULO
          <div className="registro">
            <Link to='/home/cadastroveiculo'>
              <img src="/carro.png" alt=""/>
              </Link>
          </div>
        </section>

        <section className="sec4">
          HISTÓRICO DO VEÍCULO
          <div className="historico">
            <Link to= '/home/historico'>
              <img src="/histórico.png" alt="" />
            </Link>
          </div>
        </section>

        <section className="sec5">
          DIAGNÓSTICO
          <div className="diagnostico">
            <Link to='/home/diagnostico'>
              <img src="/diagnóstico.png" alt="" />
            </Link>
          </div>
        </section>

        <section className="sec6">
            FEEDBACK
          <div className="reclamacao">
            <Link to='/home/relatos'>
              <img src="/reclamação.png" alt="" />
            </Link>
          </div>
        </section>
      </div>
    </MainCorpo>



  )


}