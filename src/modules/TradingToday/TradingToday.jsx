import { useState, useEffect } from 'react';

import TradingTodayList from '../../shared/components/TradingTodayList/TradingTodayList';

import { TradingTodaySearch } from '../../shared/services/posts-api';

import styles from './trading-today.module.scss';

const TradingToday = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const { results } = await TradingTodaySearch();
        setItems(prevItems => [...prevItems, ...results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      {loading && <p> ... loading</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}
      {<TradingTodayList items={items} />}
    </>
  );
};

export default TradingToday;
