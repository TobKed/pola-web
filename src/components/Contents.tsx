import React from 'react';
import styled from 'styled-components';

import DevelopmentSection from './DevelopmentSection';
import SocialMedia from './social-media/SocialMedia';
import Friends from './friends/Friends';
import Teams from './Teams';
import About from './About';
import TeamsFriend from './TeamsFriend';
import { Friend } from '../domain/friends';
import { Device, padding } from './../styles/theme';
import { Article } from '../domain/articles';
import ArticlesListPreview from './articles/list/ArticlesListPrewiev';

const Wrapper = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  overflow-x: hidden;
  padding-top: ${padding.normal};
  display: grid;
  grid-gap: 15px;
  grid-template-areas:
    'articles development'
    'articles social-media'
    'articles about'
    'friends friends'
    'teams-friend teams';

  @media ${Device.mobile} {
    margin: 0;
    padding: 0;
    grid-gap: 0px;
    grid-template-areas:
      'development'
      'articles'
      'about'
      'social-media'
      'friends'
      'teams-friend'
      'teams';
  }
`;

interface IContent {
  articles?: Article[];
  friends?: Friend[];
}

const Contents: React.FC<IContent> = ({ articles, friends }) => {
  return (
    <Wrapper>
      <ArticlesListPreview articles={articles} />
      <DevelopmentSection />
      <SocialMedia />
      <About />
      <Friends friends={friends} />
      <Teams />
      <TeamsFriend />
    </Wrapper>
  );
};

export default Contents;
