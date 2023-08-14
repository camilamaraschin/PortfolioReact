import styled from "styled-components" 
import {Link} from 'react-router-dom'

 export function Navbar(){
    return (
      <Navigation>
      
           <li>
            <Link to='/'>Inicio</Link>
          </li>

          <li>
            <Link to='/ProjetosWeb'>Desenvolvimento Web</Link>
          </li>

          <li>
            <Link to='/Processos'>Fluxos BPMN</Link>
          </li>
      

          <li>
            <Link to='/PowerBi'>Dashboard PowerBi</Link>
          </li>

       
     
      </Navigation>
    )
 }

 const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 2rem;
  margin-left: 10rem;

  li {
    display: inline;
  }

  a {
    color: #3e3d3f;
  }

  a:hover {
    color: #74A2B8;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin-left: 0;
    
    li {
      margin-bottom: 1rem;
    }
  }
`;
