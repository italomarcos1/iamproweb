import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  Title,
  Logo,
  Content,
  Info,
  Services,
  Highlights,
  RegisterButton,
} from './styles';

import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo@2x.png';
import cards from '../../assets/cards.png';
import smartphone from '../../assets/smartphone.png';
import like from '../../assets/like.svg';
import location from '../../assets/location.svg';
import growth from '../../assets/growth.svg';

export default function Main() {
  return (
    <Container>
      <Header>
        <Title />

        <Logo>
          <img src={logo} alt="Logo" srcSet={`${logo} 1x, ${logo2} 2x`} />
        </Logo>
        <Content id="content">
          <strong>Você é um profissional?</strong>
          <Link to="/register">Cadastre-se Gratuitamente</Link>
        </Content>
      </Header>
      <RegisterButton to="/register" id="participe">
        Cadastre-se Gratuitamente
      </RegisterButton>
      <Info>
        <h2>Participe do maior aplicativo de MG</h2>
        <h4>
          Tenha os seus serviços a venda no maior aplicativo de Minas Gerais,
          selecione a área geográfica que deseja atuar <br /> e os serviços que
          oferece. Deixe a divulgação conosco!
        </h4>
        <strong>Deixe a divulgação conosco!</strong>
      </Info>
      <div id="phone">
        <img src={smartphone} alt="Phone" />
      </div>
      <Services>
        <ul>
          <li>
            <img src={like} alt="like" />
            <strong>Cadastre-se Gratuitamente</strong>
            <h2>
              Participe do maior aplicativo de serviços de <br />
              MG, cadastre-se em 2 <br /> minutos.
            </h2>
          </li>
          <li>
            <img src={location} alt="like" />
            <strong>Seleciona a Localização</strong>
            <h2>
              Selecione a área geográfica <br /> que deseja atuar e os serviços
              que <br /> oferece.
            </h2>
          </li>
          <li>
            <img src={growth} alt="like" />
            <strong>Agora é só Faturar</strong>
            <h2>
              Nós divulgamos e vendemos o seu <br /> serviço em um APP com
              milhares de
              <br /> clientes.
            </h2>
          </li>
        </ul>
      </Services>
      {/* <Link to="/register" id="register">Cadastre-se Gratuitamente</Link> */}
      <Highlights>
        <strong>Destaque o seu serviço</strong>
        <h2>
          Tenha o seu serviço em destaque na página inicial do aplicativo com o
          valor da sua hora/serviço e promoções pontuais além da distância para
          o cliente.
        </h2>
        <div>
          <img src={cards} alt="cards" />
        </div>
        <Link to="/register" id="registerWeb">
          Cadastre-se Gratuitamente
        </Link>
      </Highlights>
      <RegisterButton to="/register" id="register">
        Cadastre-se Gratuitamente
      </RegisterButton>
    </Container>
  );
}
