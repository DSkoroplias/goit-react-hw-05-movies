import { useState, useEffect, useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import SearchForm from './SearchForm/SearchForm';
import TradingTodayList from '../../shared/components/TradingTodayList/TradingTodayList';

import { SearchMovie } from '../../shared/services/posts-api';

import styles from './search.module.scss';

const Search = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const { results } = await SearchMovie(search);
        setItems(prevItems => [...prevItems, ...results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [search]);

  const onsearchPosts = useCallback(
    ({ search }) => {
      setSearchParams({ search });
      setItems([]);
    },
    [setSearchParams]
  );

  return (
    <>
      <SearchForm onSubmit={onsearchPosts} />
      {<TradingTodayList items={items} />}
      {loading && <p> ... loading</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}
    </>
  );
};

export default Search;
