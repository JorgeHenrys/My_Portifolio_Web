import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bem-Vindo ao <br />
          Meu Portifolio Pessoal
        </SectionTitle>
        <SectionText>
          Olá, me chamo Jorge Henrique, sou estudante de Engenharia da Computação, formado em Ciência e Tecnologia e um apaixonado por tecnologias. Meu objetivo é resolver problemas utilizando das mais diversas tecnologias disponíveis hoje em dia, escolhendo as mais otimizadas e adequadas para seu tipo de projeto.
        </SectionText>
        <Button onClick={props.handleClick}>Ler Mais</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;