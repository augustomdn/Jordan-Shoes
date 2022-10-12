import { useTransform } from 'framer-motion';
import React from 'react'
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])


  return (
    <Container>
      <Header>
        <Logo>
          <Burger>

          </Burger>
        </Logo>
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="https://www.tesla.com/">UI Clone</a>
          </li>
          <li>
            <a href="#">Obrigado por Visitar</a>
          </li>
          <li>
            <a href="https://github.com/augustomdn">by Augusto Nascimento</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
};

export default UniqueOverlay
 