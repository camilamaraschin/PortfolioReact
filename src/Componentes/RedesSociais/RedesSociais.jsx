import styled from "styled-components"

export function RedesSociais(){
    return(
        <ContainerButton>
        <ul className="box">
                <li> <img src="/imagens/linkedin.png" alt="linkedin"/><a href="https://www.linkedin.com/in/camilamaraschin/" target="blank"> Linkedin</a></li>
            </ul>
            <ul className="box">
                <li> <img src="/imagens/github.png" alt="github"/><a href="https://github.com/camilamaraschin" target="blank"> Github</a></li>
            </ul>
            <ul className="box">
                <li>  <img src="/imagens/codepen.png" alt="codepen"/><a href="https://codepen.io/camilamaraschin" target="blank"> Codepen</a></li>
            </ul>
            <ul className="box">
                <li><img src="/imagens/email.png" alt="email"/> <a href="mailto:camilapb11@hotmail.com" target="blank"> Email</a></li>
            </ul> 
        </ContainerButton>

    )
}

const ContainerButton = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.3rem;
  margin-left: 20rem;
  

  .box{
   
    margin: 1.9rem;
    padding: 1rem;
  }

  li {
    display: inline;
  }

  a {
    color: #3e3d3f;
   font-size: 1.2rem;
  }

  img{
    width: .9rem;
    
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;

    .box {
      margin: 1rem;
    }
  }
`;
