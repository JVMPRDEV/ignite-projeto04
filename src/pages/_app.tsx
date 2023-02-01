import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from '../assets/logo.svg';
import { Container, Header } from "../styles/pages/app";

import Image from 'next/image'

globalStyles();
// Tudo colocado aqui vai ser exibido em todas as paginas 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg.src} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container >
  )
}
