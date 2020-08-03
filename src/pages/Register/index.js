import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  Container,
  Header,
  Footer,
  Logo,
  Background,
  Info,
  FormContainer,
  Form,
  InputContainer,
  FinishButton,
} from './styles';

import logo from '../../assets/logo.png';
import smartphone from '../../assets/app-1.png';
import Input from '../../components/Input';
import SmallSelect from '../../components/SmallSelect';
import TextArea from '../../components/TextArea';
import InputMask from '../../components/InputMask';

export default function Register() {
  const [phone, setPhone] = useState('');
  const isDesktop = useMediaQuery({ query: '(min-device-width: 900px)' });

  React.useEffect(() => {
    if (isDesktop) {
      console.log('dtop');
    }
  }, []);

  return (
    <Container>
      <Header>
        <Background />

        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
      </Header>
      <Info>
        <h2>Cadastro gratuito para o aplicativo</h2>
        <h4>
          Abaixo digite as informações necessárias para conhecer o que você pode
          oferecer em serviços profissionais.
          <br /> Participe do maior Aplicativo de Minas Gerais.
        </h4>
      </Info>
      <FormContainer>
        <div id="phone">
          <img src={smartphone} alt="phone" />
        </div>
        <Form onSubmit={() => {}}>
          <InputContainer id="inputcontainer">
            <Input title="Nome Completo" placeholder="Informe seu nome" />

            <SmallSelect title="Gênero" placeholder="Selecione..." />
            <Input
              title="Data de Nascimento"
              placeholder="DD/MM/AAAA"
              style={
                isDesktop === true
                  ? { width: 340, backgroundColor: '#f0f' }
                  : { width: 160, backgroundColor: '#ff0' }
              }
            />
          </InputContainer>
          <InputContainer id="inputcontainer">
            <Input title="Email" placeholder="Informe seu email" />
            <InputMask
              title="Celular MG"
              name="phone"
              mask="9999 9999"
              alwaysShowMask
              onChange={e => setPhone(e.target.value)}
              value={phone}
            />
          </InputContainer>
          <InputContainer id="inputcontainer">
            <Input title="Profissão" placeholder="Informe sua profissão" />
            <Input
              title="Qual a área de cobertura que atua em MG?"
              placeholder="Informe sua área de cobertura"
            />
          </InputContainer>
          <TextArea title="Serviços que Oferece"></TextArea>
          <button type="button">Cadastre-se Gratuitamente</button>
        </Form>
      </FormContainer>
      <FinishButton id="finishbutton">Cadastre-se Gratuitamente</FinishButton>
      <Footer>
        <div id="background" />
      </Footer>
    </Container>
  );
}
