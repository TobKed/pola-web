import React from 'react';
import styled from 'styled-components';

import { WrapperTeams, Title, TextSection, ButtonTeams, IconTeams } from './Teams.css';
import { Text } from '../styles/GlobalStyle.css';
import { color } from '../styles/theme';
import { ButtonFlavor, ButtonThemes } from '../components/buttons/Button';
import { ResponsiveImage } from './images/ResponsiveImage';
import { urls } from '../domain/website';
import { Link } from 'gatsby';

const Wrapper = styled(WrapperTeams)`
  grid-area: teams-friend;
`;

const TeamsFriend = () => {
  return (
    <Wrapper color={color.background.white}>
      <TextSection>
        <IconTeams>
          <ResponsiveImage imageSrc="ikona-zespół.png" />
        </IconTeams>
        <Title>Dołącz do Przyjaciół Poli i odnieś sukces!</Title>
        <Text>
          Jeśli twoja firma produkuje w Polsce i posiada wyłącznie polski kapitał, możesz skorzystać z pakietu
          atrakcyjnych narzędzi promocyjnych
        </Text>
        <Link to={urls.pola.friends()}>
          <ButtonTeams label="POZNAJ SZCZEGÓŁY" styles={ButtonThemes[ButtonFlavor.RED]} />
        </Link>
      </TextSection>
    </Wrapper>
  );
};

export default TeamsFriend;
