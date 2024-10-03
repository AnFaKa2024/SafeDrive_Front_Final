import styled from 'styled-components';

export const HeaderCabecalho = styled.header`
      min-height: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #2e0b7d; 
      border: 2px solid;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
    .logo {
      width: 6vw;
      height: auto;
      margin-top: -130px;
      margin-right: 1150px;
      flex-direction: row-reverse;
    }

    h1 {
      text-align: center;
      color: #fcf8ff;
      font-family:"Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 4vw;
    }

    

    ul, li{
      margin: 0 150px;
    }


    ul {
    margin-top: 1px;
    display: flex;
    padding: 0;
    flex-direction: row;
    justify-content: space-between;
    }

    li{
      list-style: none;

    }
    
    a {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      text-decoration: none;
      color: #fcf8ff;
      font-size: 1em;
     }
     




`

export const DivMec = styled.div`
   border: 3px solid #2e0b7d;
   border-radius: 8px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   line-height: 1.6em;
   margin: 1px;
   margin-left: 12.5vw;
   padding: 5px;
   background-color: #f0f0f0;
   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
   font-size: 1.05em; 
   text-align: center;
   width: 70vw;
   line-height: 1.7;

  
   .idEnd{
    padding: 20vw;
    

   }

   button{
    display: inline-block;
    /*ver como faz para ficar com espaço em volta dele*/
    padding: 5px 10px;
    background-color: #2e0b7d;
    color: white;
  }
`

export const DivOficina = styled.ul`
  list-style: none;

`

export const MainHistorico = styled.main`
  text-align: center;

  p{
    font-size: 1.2em;
  }


`

export const DivRodape = styled.div`
    min-height: 150px;
    text-align: center;
    border: 2px solid #2e0b7d;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    line-height: 1.6em;
    background-color: #f0f0f0;   
  
  h2, p {
      color: #2e0b7d;
      font-family: Arial, sans-serif;
      font-size: 1.4em;
     
  }

  img {
    margin-top:-140px;
    display: flex;
    flex-direction: row-reverse;
    width: 130px;
    height: auto;
  }

  ` 
export const DivCabGeral = styled.div` // Caçalho geral

  overflow: auto;
  ul{
    display: grid;
    grid-template-columns: 1fr;
    gap: 2vw;
    padding: 2vw;
      }

  li{
    background-color: #3c157c;
    margin: 0;
    padding: 0;
    display: flex;

    flex-direction: row; 
    justify-content: center;
    list-style: none;
      }
    
   h2{
      margin: 1vw 10vw; 
          }

   nav{
      text-decoration: none;
      color: #fcf8ff;
      font-size: 2vw;
        }


`

export const HeaderRecomendacao = styled.header`

    box-sizing: border-box;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f0f0;
    
  h2 {
    font-size: 2em;
    text-align: center;
    color: #2e0b7d;
    margin-bottom: 2vw;
      }

`

export const DivRecomend = styled.div`
    
    display: flex;
    align-items: center; 
    gap: 1vw;
    margin-bottom: 2vw;
    font-family:"Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  p {
    margin: 2px;
    padding: 5px;
    text-align: center;
    line-height: 1.8;
    font-size: 1.2em;
    width: 60%; 
    background-color: #f0f0f0;
    border: 2px solid #2e0b7d;
    border-radius: 8px ;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    line-height: 1.6em;
  }

  img {
    width: 35%;
    height: auto;
    border-radius: 8px ;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
  }

`

export const DivCliente = styled.div`
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f0f0f0; 
      overflow-x: hidden;
      min-height: 100vh; 
      border: 2px solid #2e0b7d;
      border-radius: 8px ;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      line-height: 1.6em;
       
      main{
        display: grid;
        grid-template-columns: 1fr;
        gap: 2vw;
        padding: 2vw;
        
      }
      
    h2: {
      font-size: 2em;
      text-align: center;
      color: #2e0b7d;
      margin-bottom: 2vw;
      
    }
`

export const DivClien = styled.div`
    
    p {
      font-size: 1.2em;
      color: #2e0b7d;
      padding: 1vw;
      background-color: #fff;
      border: 2px solid #2e0b7d;
      border-radius: 8px ;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      line-height: 1.6em;
    }
    
      
    

`

export const HeaderHome = styled.header`  /* cabeçalho exclusivo do HOME */
    overflow-x: hidden;
    min-height: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2e0b7d; 
    border: 2px solid;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
    .logo {
      width: 6vw;
      height: auto;
      margin-top: -100px;
      margin-right: 1150px;
      flex-direction: row-reverse;
    }

    h1 {
      text-align: center;
      color: #fcf8ff;
      font-family:"Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 4vw;
    }

    
    ul, li{
      margin: 0 180px;
    }


    ul {
    margin-top: 1px;
    display: flex;
    padding: 0;
    flex-direction: row;
    justify-content: space-between;
    }

    li{
      list-style: none;

    }
    
    a {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      text-decoration: none;
      color: #fcf8ff;
      font-size: 1em;
     }

     /* login  */
    .login {
      display: flex;
      flex-direction: row-reverse;
      margin-top:-150px;
      margin-left: 1160px;
      padding: 2vw;
    }
`

export const MainCorpo = styled.main`
    font-family:"Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    .Logo {
    margin-top: -87px;
    padding: 2vw;
  
  }

  .login {
    display: flex;
    flex-direction: row-reverse;
    margin-top: -115px;
    padding: 2vw;
  }

  section {
    font-size: 1.5em;
    text-align: center;
    color: #2e0b7d;
    border: 5px solid;
    border-width: 0.15px;
    border-radius: 10px 10px;
    width: 290px;
    height: 170px;
    background-color: #fcf8ff;
    top: 110px;
    left: 50px;
  }

  .container2 {
    margin-top: 68px;
    margin-left:90px;
    display: grid;
    grid-template-rows: 5;
    grid-template-columns: repeat(auto-fit, 2fr);
    gap: 25px;
    grid-template-areas:
      "sec1   sec2    sec3"
      "sec4   sec5    sec6";
  }

  .sec1 {
    grid-area: sec1;
  }
  .sec2 {
    grid-area: sec2;
  }
  .sec3 {
    grid-area: sec3;
  }
  .sec4 {
    grid-area: sec4;
  }
  .sec5 {
    grid-area: sec5;
  }
  .sec6 {
    grid-area: sec6;
  }

  .cliente {
    margin-top: 0px;
  }

  .problema {
    margin-top: 0px;
  }

  .registro {
    margin-top: 6px;
  }

  .reclamacao {
    top: 8px;
  }

  .historico {
    top: 6px;
  }
 


`

export const MainTexto = styled.main`

  h1{
    text-align: center;
    color: black;
    font-family:"Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 3em;
}

   p {
    margin: 2px;
    padding: 5px;
    text-align: center;
    font-size: 1.2em;
    background-color: #f0f0f0;
    border: 2px solid #2e0b7d;
    border-radius: 8px ;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    line-height: 2em;
  }

`

export const DivNos = styled.div`

    font-family:"Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    
    article{
    min-height: 200hw;
    background-color: #f0f0f0;
    border: 2px solid #2e0b7d;
    border-radius: 8px ;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    line-height: 2em;
    }

    h1, p {
    text-align: center;
    color: black;
    font-size: 3em;
    }

  .Antonio {
    width: 16vw;
    position: absolute;
    margin-top: 30px;
    left: 7vw;
  }
  
  .Ant {
    text-align: center;
    position: absolute;
    margin-top:250px;
    left: 7vw;
    font-size: 1.2em;
  }

  .Antrm{
    text-align: center;
    position: absolute;
    margin-top: 280px;
    right: 82vw;
    font-size: 1.2em;
    
}


  .Fernanda {
    width: 16vw;
    position: absolute;
    margin-top: 30px;
    left: 41vw;
  }
  .Fe {
    text-align: center;
    position: absolute;
    margin-top: 270px;
    left: 45vw;
    font-size: 1.2em;
  }

  .Ferm{
    text-align: center;
    position: absolute;
    margin-top: 290px;
    right: 45vw;
    font-size: 1.2em;
    
}


  .Karen {
    width: 16vw;
    position: absolute;
    margin-top: 30px;
    right: 7vw;
  }
  .Ka {
    text-align: center;
    position: absolute;
    margin-top: 260px;
    right: 9vw;
    font-size: 1.2em;
  }

.Karm{
    text-align: center;
    position: absolute;
    margin-top: 280px;
    right: 10.6vw;
    font-size: 1.2em;
    
}

`    
export const HeaderVec = styled.header`
  h1, p {
      text-align: center;
      color: black;
      font-size: 3em;
      font-family:"Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }

`

export const DivDiag = styled.div`
   
   border: 3px solid #2e0b7d;
   border-radius: 8px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   line-height: 1.6em;
   margin: 1px;
   padding: 5px;
   background-color: #f0f0f0;
   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
   font-size: 1.05em; 
   text-align: center;
   

`

export const DivHistHome = styled.div`
   
   border: 3px solid #2e0b7d;
   border-radius: 8px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   margin: 1px;
   padding: 5px;
   background-color: #f0f0f0;
   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
   font-size: 1.05em; 
   text-align: center;
   



`




















