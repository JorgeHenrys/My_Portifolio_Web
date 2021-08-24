import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Projetos de Código Aberto'},
  { number: 0, text: 'Alunos', },
  { number: 12, text: 'Github Followers', },
  { number: 3, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Arquivos Pessoais</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
