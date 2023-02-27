import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCreditsByMovieId } from '../../shared/services/posts-api';

import styles from './cast-page.module.css';

const CastPage = () => {
  const [cast, setCasts] = useState([]);
  const { id } = useParams();

  console.log(cast);

  useEffect(() => {
    const fetchCasts = async () => {
      try {
        const data = await getCreditsByMovieId(id);
        setCasts(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchCasts();
  }, [id]);

  const element = cast.map(({ id, name, profile_path }) => (
    <li key={id}>
      <img
        className={styles.galleryItem_image}
        src={`https://image.tmdb.org/t/p/w92/${profile_path}`}
        alt="poster_path"
      />
      <p>{name}</p>
    </li>
  ));

  return (
    <>
      <ul>{element.length === 0 ? "We don't have any foto" : element}</ul>;
    </>
  );
};

export default CastPage;
