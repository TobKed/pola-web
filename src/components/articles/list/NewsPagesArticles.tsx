import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { margin, Device } from './../../../styles/theme';
import ReactPaginate from 'react-paginate';
import { Article } from './../../../domain/articles';
import ArticlesList from './ArticlesList';
import './../../../components/Pagination.css';
import LatestArticle from './../../../components/articles/list/LatestArticle';
import { DecodedValueMap, SetQuery } from 'use-query-params';
import { IArticlesTwoColumns, getArticlesTwoColumns } from './../../../utils/articles';
import { ArticleBlock } from './ArticleBlock';

const Wrapper = styled.div`
  margin-top: ${margin.veryBig};

  @media ${Device.mobile} {
    margin-top: 0;
  }
`;

const PaginationSection = styled.div`
  display: flex;
  justify-content: center;
`;

const FirstArticle = styled.div<{ inVisible?: boolean }>`
  margin-top: ${margin.veryBig};
  margin-left: ${margin.normal};
  margin-right: ${margin.normal};

  @media ${Device.desktop} {
    display: none;
  }
`;

interface NewsPage {
  articles?: Article[];
  query: DecodedValueMap<IQuery>;
  setQuery: SetQuery<IQuery>;
}

interface IQuery {
  tags: string[];
  id: number;
}

const NewsPageArticles: React.FC<NewsPage> = ({ articles, query, setQuery }) => {
  const [sortedArticles, setArticles] = useState<IArticlesTwoColumns[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (articles) {
      let art: Article[] = articles.slice();
      art.shift();

      if (query.tags.length > 0) {
        art = art.filter((article: Article) => query.tags.includes(article.tag));
      }
      const sortedArticles = getArticlesTwoColumns(art);
      setArticles(sortedArticles.slice());
      setPageCount(sortedArticles.length);

      const isWrongQueryId =
        query.id * 1 === undefined ||
        query.id * 1 > sortedArticles.length ||
        query.id < 1 ||
        !Number.isInteger(query.id);

      if (isWrongQueryId) {
        setQuery({ tags: query.tags, id: 1 }, 'push');
      } else {
        setCurrentPage(query.id - 1);
      }
    }
  }, [articles, query]);

  const handlePageClick = ({ selected: selectedPage }) => {
    setQuery({ tags: query.tags, id: selectedPage + 1 }, 'push');
  };

  return (
    <>
      {articles && (
        <LatestArticle
          key={articles[0].id}
          title={articles[0].title}
          slug={articles[0].slug}
          photo={articles[0].imagePath}
          date={articles[0].date}
          text={articles[0].subTitle}
          tag={articles[0].tag}
        />
      )}
      {currentPage === 0 && articles && (query.tags.includes(articles[0].tag) || query.tags.length === 0) && (
        <FirstArticle>
          <ArticleBlock
            key={articles[0].id}
            id={articles[0].id}
            title={articles[0].title}
            slug={articles[0].slug}
            imagePath={articles[0].imagePath}
            date={articles[0].date}
            subTitle={articles[0].subTitle}
            tag={articles[0].tag}
          />
        </FirstArticle>
      )}
      {sortedArticles && sortedArticles.length > 0 && (
        <Wrapper>
          <ArticlesList articles={sortedArticles[currentPage]} />
        </Wrapper>
      )}
      <PaginationSection>
        {pageCount > 0 && (
          <ReactPaginate
            previousLabel={'poprzednia'}
            nextLabel={'następna'}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            previousLinkClassName={'pagination__link'}
            nextLinkClassName={'pagination__link'}
            disabledClassName={'pagination__link--disabled'}
            activeClassName={'pagination__link--active'}
            forcePage={currentPage}
          />
        )}
      </PaginationSection>
    </>
  );
};

export default NewsPageArticles;
