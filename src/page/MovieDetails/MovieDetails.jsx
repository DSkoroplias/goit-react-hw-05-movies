import { useState, useEffect, useCallback } from 'react';

import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';

import { getMovieById } from '../../shared/services/posts-api';

import styles from './movie-details.module.scss';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await getMovieById(id);
        setMovieDetails(result);
      } catch ({ response }) {}
    };
    fetchPost();
  }, [id]);

  const goBack = useCallback(() => {
    navigate(from);
  }, [navigate, from]);

  return (
    <div className={styles.wrapper}>
      <button onClick={goBack} className={styles.btn}>
        Go back
      </button>
      <div className={styles.infMovie}>
        <img
          className={styles.galleryItem_image}
          src={`https://image.tmdb.org/t/p/w185/${movieDetails?.poster_path}`}
          alt="poster"
          width="250"
        />
        <section>
          <h2>{movieDetails?.title}</h2>
          <p>User Score: {Math.round(movieDetails?.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p> {movieDetails?.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movieDetails?.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </section>
      </div>

      <div>
        <h2>Additional information</h2>
        <li>
          <Link to="cast" state={{ from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from }}>
            Reviews
          </Link>
        </li>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
