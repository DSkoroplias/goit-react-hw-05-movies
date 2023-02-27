import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./page/Home/Home'));
const Movies = lazy(() => import('./page/Movies/Movies'));

const MovieDetails = lazy(() => import('./page/MovieDetails/MovieDetails'));
const CastPage = lazy(() => import('./page/CastPage/CastPage'));
const Reviews = lazy(() => import('./page/ReviewsPage/ReviewsPage'));

const NotFoundPage = lazy(() => import('./page/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
