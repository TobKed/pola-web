import React from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { PageLayout } from '../layout/PageLayout';
import SEO from '../layout/seo';
import { SearchContainer } from '../search/form/SearchForm';
import Contents from '../components/Contents';
import { PageSection } from '../layout/PageSection';
import { Device, pageWidth, padding, color } from '../styles/theme';
import { IPolaState } from '../state/types';
import { searchDispatcher } from '../state/search/search-dispatcher';
import { LoadBrowserLocation } from '../state/app/app-actions';
import { IProductData } from '../domain/products';
import { IArticle } from '../domain/articles';
import { ResponsiveImage } from '../components/responsive-image';
import { IFriend } from '../domain/friends';
import Download from '../components/Download';
import { SearchResultsList } from '../search/results-list/SearchResultsList';

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  @media ${Device.mobile} {
    padding: ${padding.normal};
  }
  @media ${Device.desktop} {
    padding: ${padding.normal} 0;
    max-width: ${pageWidth};
  }
`;

export const Background = styled.div<{ img?: string }>`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;

  div {
    width: 100%;
    height: 100%;
  }
`;

interface IMainPage {
  location: Location;
  phrase: string;
  searchResults: IProductData[];
  token?: string;
  isLoading?: boolean;
  articles?: IArticle[];
  friends?: IFriend[];

  invokeSearch: (phrase: string) => void;
  invokeLoadMore: () => void;
  selectProduct: (code: string, id: string) => void;
}

const MainPage = (props: IMainPage) => {
  const { phrase, searchResults, location } = props;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(LoadBrowserLocation(location));
  }, []);

  return (
    <PageLayout>
      <SEO title="Pola Web | Strona główna" />
      <PageSection size="full" backgroundColor={color.background.primary}>
        <Background>
          <ResponsiveImage imageSrc={'background.png'} />
        </Background>
        <Content>
          <SearchContainer onSearch={props.invokeSearch} />
        </Content>
      </PageSection>
      {searchResults && (
        <PageSection>
          <SearchResultsList
            phrase={phrase}
            results={searchResults}
            isLoading={props.isLoading}
            token={props.token}
            onLoadMore={props.invokeLoadMore}
            onSelect={props.selectProduct}
          />
        </PageSection>
      )}
      <PageSection>
        <Contents articles={props.articles} friends={props.friends} />
      </PageSection>
      <PageSection size="full" backgroundColor={color.background.black}>
        <Download />
      </PageSection>
    </PageLayout>
  );
};

export default connect(
  (state: IPolaState) => ({
    phrase: state.search.phrase,
    searchResults: state.search.products,
    token: state.search.token,
    isLoading: state.search.isLoading,
    articles: state.articles.data,
    friends: state.friends.data,
  }),
  {
    invokeSearch: searchDispatcher.invokeSearch,
    invokeLoadMore: searchDispatcher.invokeLoadMore,
    selectProduct: searchDispatcher.selectProduct,
  }
)(MainPage);
