import styled from "styled-components"
import bpmn from './bpmn.json';


function Processos (){
    return(
 <>

<Titile> Aqui você encontra alguns desenhos de fluxos de casos fictícios usando como ferramenta o Bizagi  </Titile>
{bpmn.map((projeto, index) => (
        <CardContainer key={index}>
          <img src={projeto.imageSrc} alt={projeto.title} />
          <h3>{projeto.title}</h3>
          <ul>
            {projeto.links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
              </li>
            ))}
          </ul>
        </CardContainer>

        ))}



 </>
    )
}

export default Processos

const CardContainer = styled.section`
 display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1.9rem;

  img {
    width: 35rem;
    height: 15rem;
    border: 2px dashed #74A2B8;
    border-radius: 3rem;
    padding: 0.8rem;
  }

  h3 {
    text-align: center;
    margin-top: 1rem;
    
  }

  ul {
    padding: 0;
    margin: 1rem 0 0;
    text-align: center;
  
  }

  li {
    display: inline;
    gap: 2rem;
  }
  a {
    color: #3e3d3f;
    margin-top: .1rem;
    padding: .1rem;
    cursor: pointer;
    
  }

 
  
`;

const Titile = styled.h2`

text-align: center;

margin-left:10rem;
color: #74A2B8;

`