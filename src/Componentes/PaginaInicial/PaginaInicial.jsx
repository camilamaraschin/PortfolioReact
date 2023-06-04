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
         <p> Sou <b>desenvolvedora de aplicação web e mobile</b> e prático o aprendizado contínuo. Sempre <br/>
         em busca de novos desafios na área da tecnologia para agregar todas as minhas skills que vão<br/> além de skills técnicas. 
         <br/> <br/>
             Um dos meus principais objetivos de carreira é poder trabalhar com pessoas experientes no <br/> qual possa aprender e que eu tenha
            a oportunidade de ensinar aqueles que precisem quero <br/>poder contribuir com as metas do time, trazer resoluções de problemas
            e gerar bons resultados. 

         </p>
        </ContainerText>


    </Container>
        <RedesSociais/>
        <Text> Habilidades e conhecimentos</Text>
    <Tecnologia/>
    
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

 const Text =styled.h1`
 
 text-align: center;
 margin-left: 7.8rem;
 padding: 1rem;
 text-shadow: 0.1em 0.1em 0.2em #cb6ce6 ;
 
 `