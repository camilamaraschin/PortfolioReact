import styled from 'styled-components';
import { Navbar } from '../Navbar/Navbar';
import { RedesSociais } from '../RedesSociais/RedesSociais';
import { Tecnologia } from '../Tecnologias/Tecnologia';
import Projetos from '../Projetos/Projetos';


 
 
 function PaginaInicial (){
 return (

    <>
    <Navbar/>
    <Container>
            <img src='/imagens/perfil.png'/>
        <ContainerText> 
         <h2> Olá, sou a Camila </h2>
         <p> Sou <b>desenvolvedora de aplicação web e mobile</b> e prático o aprendizado contínuo. Sempre em busca  <br/>
         de novos desafios na área da tecnologia onde possa agregar todas as minhas skills que vão além de<br/> skills técnicas. 
         <br/> <br/>
             Um dos meus principais objetivos de carreira é poder trabalhar com pessoas experientes que <br/> possam me ensinar a ter boas práticas
              de programação, a cumprir metas, participar <br/> e contribuir gerando com o st bons resultados. 

         </p>
        </ContainerText>


    </Container>
        <RedesSociais/>
        <Text> Habilidades e conhecimentos</Text>
    <Tecnologia/>
    <Text> Projetos</Text>
    <Projetos/>
   
    </>
 )

 }

 export default PaginaInicial;

 const Container = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.9rem;
  text-align: center;

  img {
    width: 50%;
    max-width: 20rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
      width: 17%;
      margin-right: 1rem;
    }
  }
`;

const ContainerText = styled.div`
 line-height: 1.5;
 margin-bottom: 1rem;
 text-align: justify;
 color: #3e3d3f;
 font-size: 1.1rem;

 @media (min-width: 768px) {
    text-align: left;
    font-size: 1.2rem;
  }
 
`;

 const Text =styled.h2`
 
 text-align: center;
 margin-left: 7.8rem;
 padding: 1rem;
 `