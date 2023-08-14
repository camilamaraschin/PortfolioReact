import styled from 'styled-components';


import { RedesSociais } from '../RedesSociais/RedesSociais';
import { Tecnologia } from '../Tecnologias/Tecnologia';



 
 
 function PaginaInicial (){
 return (

    <>
    
    <Container>
            <img src='/imagens/perfil.jpeg'/>
            <ContainerText> 
         <h2> Olá, sou a Camila </h2>
         <p> Minha <b>paixão pela tecnologia</b> me levou a explorar a <b>agilidade e suas metodologias</b>, assim como os processos<br/>que compõem um projeto.
         Defendo o aprendizado contínuo e estou constantemente em busca de ampliar meus<br/>conhecimentos e habilidades técnicas. 
         Percebo que o setor de tecnologia exige atualização constante, e estou <br/>comprometida em acompanhar todas as evoluções do mercado.
         <br/><br/>
         Um dos meus <b>principais objetivos de carreira</b> é ter a oportunidade de trabalhar ao lado de profissionais experientes,<br/>
          dos quais eu possa aprender e, ao mesmo tempo, compartilhar meus conhecimentos com aqueles que precisam.<br/> Quero poder contribuir com as metas da equipe,
          trazer soluções para problemas complexos, gerar resultados<br/>excepcionais e aproveitar
           todas as oportunidades de desenvolvimento profissional que surgirem.




          

         </p>
        </ContainerText>


    </Container>
        <RedesSociais/>
        <Text> Habilidades e conhecimentos</Text>
    <Tecnologia/>
    
   
   
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
 color: #3e3d3f;
 text-align: center;
 margin-left: 7.8rem;
 padding: 1rem;

 
 `