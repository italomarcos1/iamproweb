import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  Logo,
  BannerContainer,
  Content,
  Info,
  Services,
  Highlights,
  RegisterButton,
  EasyToHire,
  EasyToHireInfo,
  Bubbles,
} from './styles';

import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo@2x.png';
import cards from '../../assets/cards@2x.png';
import smartphone from '../../assets/smartphone.png';
import smartphone2 from '../../assets/app-1.png';
import like from '../../assets/like.svg';
import location from '../../assets/location.svg';
import growth from '../../assets/growth.svg';

import profissional1 from '../../assets/objetivoDoAplicativo.png';
import profissional2 from '../../assets/profissional.png';
import profissional3 from '../../assets/clientes.png';

import bubble1 from '../../assets/babysitters.png';
import bubble2 from '../../assets/barber.png';
import bubble3 from '../../assets/cabeleireiros.png';
import bubble4 from '../../assets/cleaner.png';
import bubble5 from '../../assets/dj.png';
import bubble6 from '../../assets/eletricista.png';
import bubble7 from '../../assets/encanador.png';
import bubble8 from '../../assets/fotografos.png';
import bubble9 from '../../assets/medico.png';
import bubble10 from '../../assets/passeioComCao.png';

export default function Main() {
  return (
    <Container>
      <Header>
        <Link>
          <img src={logo} alt="Logo" srcSet={`${logo} 1x, ${logo2} 2x`} />
        </Link>
      </Header>

      <BannerContainer>
        <Content>
          <strong>Você é um profissional?</strong>
          <Link to="/register">Cadastre-se Gratuitamente</Link>
        </Content>
      </BannerContainer>

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
        <Link to="/register">Cadastre-se Gratuitamente</Link>
      </Highlights>
      <RegisterButton to="/register" id="participe">
        Cadastre-se Gratuitamente
      </RegisterButton>
      <EasyToHire>
        <div id="phonebottom">
          <img src={smartphone2} alt="phone" />
        </div>
        <EasyToHireInfo>
          <strong>Um aplicativo fácil de contratar</strong>
          <h3>
            Imagine ter no seu smartphone todos os profissionais a sua <br />
            disposição, valores por hora ou por serviço.
          </h3>
          <ul>
            <li>
              <img src={profissional1} alt="profissional" />
              <div>
                <h2>Objetivo do Aplicativo</h2>
                <h4>
                  Facilitamos a vida das pessoas com um aplicativo onde reúne
                  vários profissionais para contratação imediata por hora ou por
                  serviço
                </h4>
              </div>
            </li>
            <li>
              <img src={profissional2} alt="profissional" />
              <div>
                <h2>Profissional</h2>
                <h4>
                  Ajudamo-lo a aumentar <br />
                  exponencialmente o seu volume de <br />
                  negócios com comissão de 20%
                </h4>
              </div>
            </li>
            <li>
              <img src={profissional3} alt="profissional" />
              <div>
                <h2>Clientes</h2>
                <h4>
                  Contrate e pague o profissional que deseja de forma simples e
                  rápida
                </h4>
              </div>
            </li>
          </ul>
        </EasyToHireInfo>
      </EasyToHire>
      <Bubbles>
        <img src={bubble1} alt="" />
        <img src={bubble2} alt="" />
        <img src={bubble3} alt="" />
        <img src={bubble4} alt="" />
        <img src={bubble5} alt="" />
        <img src={bubble6} alt="" />
        <img src={bubble7} alt="" />
        <img src={bubble8} alt="" />
        <img src={bubble9} alt="" />
        <img src={bubble10} alt="" />
      </Bubbles>
    </Container>
  );
}
