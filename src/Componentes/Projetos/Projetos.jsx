import styled from "styled-components"


function Projetos (){
    return(
 <>

<CardContainer>
        <img src="/imagens/Marvel.png" alt="Marvel" />
        <h3>Escolha seu Personagem</h3>
        <ul>
          <li><a href="https://camilamaraschin.github.io/Projeto-Mapa-DevWeek/" target="_blank">Link do Site</a></li>
          <li><a href="https://github.com/camilamaraschin/Projeto-Mapa-DevWeek">Link do Repositório</a></li>
        </ul>
      </CardContainer>

      <CardContainer>
        <img src="/imagens/pendulo.gif" alt="Pêndulo" />
        <h3>30 dias de CSS</h3>
        <ul>
          <li><a href="https://github.com/camilamaraschin/Projeto-Mapa-DevWeek">Link do Repositório</a></li>
        </ul>
      </CardContainer>

 



 </>
    )
}

export default Projetos

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem;
  padding: 1.9rem;

  img {
    width: 25rem;
    height: 13rem;
    border: 2px dashed #cb6ce6;
    padding: 0.8rem;
  }

  h3 {
    text-align: center;
    margin-top: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0;
    text-align: center;
  }

  li {
    display: inline;
  }
`;