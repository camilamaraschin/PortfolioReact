import styled from "styled-components"
import db from './db.json';


function Projetos (){
    return(
 <>

<Titile> Projetos </Titile>
{db.map((projeto, index) => (
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

export default Projetos

const CardContainer = styled.section`
 display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1.9rem;

  img {
    width: 25rem;
    height: 15rem;
    border: 2px dashed #cb6ce6;
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

  a:hover {
    color: #CB6CE6;
  }
  
`;

const Titile = styled.h1`

text-align: center;
margin-left:8rem;
text-shadow: 0.1em 0.1em 0.2em #cb6ce6 ;
`