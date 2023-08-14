import styled from "styled-components"

export function Tecnologia(){
return(

    <>
    <Container>
        <ContainerText> 
        
         <ContainerList>
         <List>
            <li> BPMN</li>
          </List>

          <List>
            <li> Metodologias Ágeis</li>
          </List>



          <List>
            <li> Git/Github</li>
          </List>
                   
             <List>
            <li> Javascript</li>
          </List>
          <List>
            <li> ReactJs</li>
          </List>
          
          <List>
            <li> Figma</li>
          </List>
          
            <List>
            <li> UX/UI Designer</li>
          </List>
         
         </ContainerList>
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
  color: #3e3d3f;
  text-align: center;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    text-align: left;
    font-size: 1.2rem;
  }
`;

const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const List = styled.ul`
  border: 1px solid black;
  border-radius: 3rem;
  width: 14rem;
  margin: 1.5rem;
  margin-left: 0;
  flex-direction: row;
  color: white;
  background-color: #74A2B8;
  box-shadow: 5px 10px #888888;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    margin-left: 9rem;
  }


`