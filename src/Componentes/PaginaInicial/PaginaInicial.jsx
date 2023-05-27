import styled from 'styled-components';
import { Navbar } from '../Navbar/Navbar';
import { RedesSociais } from '../RedesSociais/RedesSociais';


 
 
 function PaginaInicial (){
 return (

    <>
    <Navbar/>
    <Container>
            <img src='../../../public/imagens/perfil.png'/>
        <ContainerText> 
         <h2> Olá, sou a Camila </h2>
         <p> Sou <b>desenvolvedora de aplicação web</b> e prático o aprendizado contínuo.Sempre em busca  <br/>
         de novos desafios na area da tecnologia para agregar todas as minhas skills que vão alem de<br/> skills técnicas. 
         <br/> <br/>Atualmente sou estágiaria da área da Governança de TI onde trabalho a frente de um projeto  <br/>
             do zero no desenvolvimento de um Portal de noticias relacionados a Governança de TI aplicando <br/> conceitos de UX/UI Desing, usando tecnologias 
             como : <u>ReactJs e JavaSpring Boot</u> e alguns <br/> processos e Governança e metodologias como: fluxo de processos, metodologias ágeis, <br/>lean inception
             e dentre outras. <br/> <br/>
             Um dos meus principais objetivos de carreira é poder trabalhar com pessoas experientes que <br/>  possam aprender e que eu tenha a 
             oportunidade ensinar, contribuir com as metas do time, <br/> contribuir e gerar bons resultados. 

         </p>
        </ContainerText>


    </Container>
        <RedesSociais/>
   
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

 