import { HeaderHome } from "@/styled";



export default function Principal(){
  return(

    

    <HeaderHome>
    
        <h1>Olá, seja bem vindo ao SafeDrive</h1>

        <img src= '/LG_SafeDrive.png' className="logo"  alt="Logo SafeDrive" />
        <br />
        <nav className="navegacao">
          <ul>
            <div className="SD">
              <li><Link to='/home/safedrive'>SafeDrive</Link></li>
            </div>
            <div className="Cl">
              <li><Link to='/home/cliente'>Clientes</Link></li>
            </div>
            <div className="Rec">
              <li><Link to='/home/recomendacao'>Recomendações</Link></li>
            </div>
          </ul>
      </nav>
        
    


      </HeaderHome>
    
    
  )

}