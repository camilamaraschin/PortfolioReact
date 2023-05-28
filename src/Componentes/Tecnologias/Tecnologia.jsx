import styled from "styled-components"

export function Tecnologia(){
return(

    <>
    <Container>
        <ContainerText> 
         <h3> Conhecimento e tecnologias que trabalho </h3>
          <ul>
            <li> Javascript</li>
          </ul>
          <ul>
            <li> ReactJs</li>
          </ul>
          <ul>
            <li> Styled Components</li>
          </ul>
          <ul>
            <li> Gestão de Projetos</li>
          </ul>
        </ContainerText>


    </Container>
    </>
)
}

const Container = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.9rem;
  text-align: center;

 

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    
  }
`;

const ContainerText = styled.div`
 line-height: 1.5;
 margin-bottom: 1rem;
 text-align: justify;
 color: #3e3d3f;
 font-size: 1.1rem;
 flex-direction:inline;

 @media (min-width: 768px) {
    text-align: left;
    font-size: 1.2rem;
  }
 
`;