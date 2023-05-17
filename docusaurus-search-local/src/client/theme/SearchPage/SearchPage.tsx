import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { usePluralForm, useDocsPreferredVersion } from '@docusaurus/theme-common';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';

import useSearchQuery from '../hooks/useSearchQuery';
import { fetchIndexes } from '../SearchBar/fetchIndexes';
import { SearchSourceFactory } from '../../utils/SearchSourceFactory';
import { SearchDocument, SearchResult } from '../../../shared/interfaces';
import { highlight } from '../../utils/highlight';
import { highlightStemmed } from '../../utils/highlightStemmed';
import { getStemmedPositions } from '../../utils/getStemmedPositions';
import LoadingRing from '../LoadingRing/LoadingRing';

import styles from './SearchPage.module.css';
import { concatDocumentPath } from '../../utils/concatDocumentPath';

export default function SearchPage(): React.ReactElement {
  return (
    <Layout>
      <SearchPageContent />
    </Layout>
  );
}

function SearchPageContent(): React.ReactElement {
  const {
    siteConfig: { baseUrl },
  } = useDocusaurusContext();

  // It returns undefined for non-docs pages.
  const activePlugin = useActivePlugin();
  let versionUrl = baseUrl;

  // There is an issue, see `SearchBar.tsx`.
  const { preferredVersion } = useDocsPreferredVersion(activePlugin?.pluginId);
  if (preferredVersion && !preferredVersion.isLast) {
    versionUrl = preferredVersion.path + '/';
  }
  const { selectMessage } = usePluralForm();
  const { searchValue, updateSearchPath } = useSearchQuery();
  const [searchQuery, setSearchQuery] = useState(searchValue);
  const [searchSource, setSearchSource] =
    useState<(input: string, callback: (results: SearchResult[]) => void) => void>();
  const [searchResults, setSearchResults] = useState<SearchResult[]>();

  const pageTitle = useMemo(
    () =>
      searchQuery
        ? translate(
            {
              id: 'theme.SearchPage.existingResultsTitle',
              message: 'Search results for "{query}"',
              description: 'The search page title for non-empty query',
            },
            {
              query: searchQuery,
            }
          )
        : translate({
            id: 'theme.SearchPage.emptyResultsTitle',
            message: 'Search the documentation',
            description: 'The search page title for empty query',
          }),
    [searchQuery]
  );

  useEffect(() => {
    updateSearchPath(searchQuery);

    if (searchSource) {
      if (searchQuery) {
        searchSource(searchQuery, (results) => {
          setSearchResults(results);
        });
      } else {
        setSearchResults(undefined);
      }
    }

    // `updateSearchPath` should not be in the deps,
    // otherwise will cause call stack overflow.
  }, [searchQuery, searchSource]);

  const handleSearchInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  useEffect(() => {
    if (searchValue && searchValue !== searchQuery) {
      setSearchQuery(searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    async function doFetchIndexes() {
      const { wrappedIndexes, zhDictionary } = await fetchIndexes(versionUrl);
      setSearchSource(() => SearchSourceFactory(wrappedIndexes, zhDictionary, 100));
    }
    doFetchIndexes();
  }, [versionUrl]);

  return (
    <React.Fragment>
      <Head>
        {/*
         We should not index search pages
          See https://github.com/facebook/docusaurus/pull/3233
        */}
        <meta property="robots" content="noindex, follow" />
        <title>{pageTitle}</title>
      </Head>

      <div className="container margin-vert--lg">
        <h1>{pageTitle}</h1>

        <input
          type="search"
          name="q"
          className={styles.searchQueryInput}
          aria-label="Search"
          onChange={handleSearchInputChange}
          value={searchQuery}
          autoComplete="off"
          autoFocus
        />

        {!searchSource && searchQuery && (
          <div>
            <LoadingRing />
          </div>
        )}

        {searchResults &&
          (searchResults.length > 0 ? (
            <p>
              {selectMessage(
                searchResults.length,
                translate(
                  {
                    id: 'theme.SearchPage.documentsFound.plurals',
                    message: '1 document found|{count} documents found',
                    description:
                      'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
                  },
                  { count: searchResults.length }
                )
              )}
            </p>
          ) : process.env.NODE_ENV === 'production' ? (
            <p>
              {translate({
                id: 'theme.SearchPage.noResultsText',
                message: 'No documents were found',
                description: 'The paragraph for empty search result',
              })}
            </p>
          ) : (
            <p>⚠️ The search index is only available when you run docusaurus build!</p>
          ))}

        <section>
          {searchResults && searchResults.map((item) => <SearchResultItem key={item.document.i} searchResult={item} />)}
        </section>
      </div>
    </React.Fragment>
  );
}

function SearchResultItem({
  searchResult: { document, type, page, tokens, metadata },
}: {
  searchResult: SearchResult;
}): React.ReactElement {
  const isTitle = type === 0;
  const isContent = type === 2;
  const pathItems = ((isTitle ? document.b : (page as SearchDocument).b) as string[]).slice();
  const articleTitle = (isContent ? document.s : document.t) as string;
  if (!isTitle) {
    pathItems.push((page as SearchDocument).t);
  }
  return (
    <article className={styles.searchResultItem}>
      <h2>
        <Link
          to={document.u + (document.h || '')}
          dangerouslySetInnerHTML={{
            __html: isContent
              ? highlight(articleTitle, tokens)
              : highlightStemmed(articleTitle, getStemmedPositions(metadata, 't'), tokens, 100),
          }}
        ></Link>
      </h2>
      {pathItems.length > 0 && <p className={styles.searchResultItemPath}>{concatDocumentPath(pathItems)}</p>}
      {isContent && (
        <p
          className={styles.searchResultItemSummary}
          dangerouslySetInnerHTML={{
            __html: highlightStemmed(document.t, getStemmedPositions(metadata, 't'), tokens, 100),
          }}
        />
      )}
    </article>
  );
}
