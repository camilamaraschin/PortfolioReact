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
         <p> Sou uma <b>desenvolvedora  apaixonada por criar aplicações web e mobile inovadoras</b> e 
          estou constantemente<br/> em busca de novos desafios na área da tecnologia. Além das minhas
          habilidades técnicas, sou uma defensora do <br/>aprendizado contínuo, sempre buscando
          expandir meus conhecimentos.
         <br/><br/>
         Um dos meus principais objetivos de carreira é ter a oportunidade de trabalhar ao lado
          de profissionais experientes<br/> dos quais eu possa aprender e, ao mesmo tempo, compartilhar 
            meus conhecimentos com aqueles que precisam.<br/> Estou ansiosa para contribuir com as metas da 
              equipe, trazer soluções para problemas complexos e gerar resultados <br/>excepcionais e aproveitar 
              todas as oportunidades de desenvolvimento profissional que surgirem.

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