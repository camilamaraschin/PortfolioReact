import styled from "styled-components"

const links = [
  {
    imageSrc: '/imagens/linkedin.png',
    alt: 'linkedin',
    url: 'https://www.linkedin.com/in/camilamaraschin/',
    label: 'Linkedin'
  },
  {
    imageSrc: '/imagens/github.png',
    alt: 'github',
    url: 'https://github.com/camilamaraschin',
    label: 'Github'
  },
  {
    imageSrc: '/imagens/codepen.png',
    alt: 'codepen',
    url: 'https://codepen.io/camilamaraschin',
    label: 'Codepen'
  },
  {
    imageSrc: '/imagens/email.png',
    alt: 'email',
    url: 'mailto:camilapb11@hotmail.com',
    label: 'Email'
  }
];

export function RedesSociais(){
    return(
      <ContainerButton>
      {links.map((link, index) => (
        <ul className="box" key={index}>
          <li>
            <img src={link.imageSrc} alt={link.alt} />
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        </ul>
      ))}
    </ContainerButton>

    )
}

const ContainerButton = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;

 
  

  .box{
   
    margin-left: .9rem;
   
    padding: 4rem;
  }

  li {
    display: inline;
  }

  a {
    color: #3e3d3f;
   font-size: 1.2rem;
  }

  img{
    width: .9rem;
    
    
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;

    .box {
      margin: 1rem;
    }
  }
`;
