import styled from "styled-components" 

 export function Navbar(){
    return (
      <Navigation>
      

        <ul> 
        <li> <a href=""> Inicio</a></li>
        </ul>

        <ul> 
        <li> <a href=""> Projetos</a></li>
        </ul>
     
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
  padding: 1.2rem;
  margin-left: 10rem;
  


  li {
    display: inline;
    
  }

  a {
    color: #3e3d3f;
    
  }

  a:hover {
    color: #9f9aa0;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;

   
  }
`;
