import styled from "styled-components"



function Processos (){
    return(
 <>

<Titile> Aqui você encontra alguns dashboard em BI de casos fictícios, criando storytellings de acordo com o case </Titile>

        <CardContainer>
        <iframe title="Analise de vendas" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNzQ1MWI4YTctNDU1MC00ZWE5LTk1ZDctMWMzZmNkODc4NGFhIiwidCI6ImFmNDQzZDNhLThkNDctNDY2NS05MThjLTE0OWQyYWRlOGM2MCJ9" 
        frameborder="0" allowFullScreen="true"></iframe>
        </CardContainer>

        <CardContainer>
<iframe title="Report Section" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZmNkMjZkOWMtMWRkNC00NTNiLWI2MzctMDVmNjgwMGVlZjAzIiwidCI6ImFmNDQzZDNhLThkNDctNDY2NS05MThjLTE0OWQyYWRlOGM2MCJ9"
 frameborder="0" allowFullScreen="true"></iframe>

        </CardContainer>

        



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