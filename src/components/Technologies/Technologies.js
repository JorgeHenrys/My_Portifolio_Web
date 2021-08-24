import React from 'react';
import { DiAndroid, DiDart, DiFirebase, DiPhonegap, DiReact, DiUnitySmall, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      Trabalho com diversas tecnologias, onde cada uma se encaixa perfeitamente em um determinado tipo de projeto. Que vai desde a criação do Design de uma interface de usuário, passando pelo desenvolvimento de aplicações mobile e web, e até mesmo a criação de Jogos Digitais.
    </SectionText>
    <List>
    <ListItem>
        <picture>
          <DiAndroid size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile Dev</ListTitle>
          <ListParagraph>
            Experiência com <br />
            Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiência com <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiência com <br />
            Node, Flask, GraphQL, Firebase e Banco de Dados (MySQL, Postgres e MongoDB)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX e Design</ListTitle>
          <ListParagraph>
            Experiência com <br />
            Figma, Adobe Illustrator, Krita e Aseprite
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiUnitySmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Game Dev</ListTitle>
          <ListParagraph>
            Experiência com <br />
            Unity e Flame (Flutter)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
