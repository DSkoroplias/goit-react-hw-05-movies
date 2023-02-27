import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './trading-today-list.module.scss';

const TradingTodayList = ({ items}) => {
  const location = useLocation();

  const elements = items.map(({ id, title }) => (
    <Link
      className={styles.link}
      key={id}
      to={`/movies/${id}`}
      state={{ from: location }}
    >
      <li className={styles.item}>
        <h4 className={styles.title}>{title}</h4>
      </li>
    </Link>
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default memo(TradingTodayList);

TradingTodayList.defaultProps = {
  items: [],
};
