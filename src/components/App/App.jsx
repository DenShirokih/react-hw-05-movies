import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from 'components/Layout/Layout';
// import { HomeView } from 'views/HomeView';
// import { MovieDetailsView } from 'views/MovieDetailsView';
// import { CastView } from 'views/CastView';
// import { ReviewsView } from 'views/ReviewsView';
// import { MoviesSearhView } from 'views/MoviesSearhView';

const HomeView = lazy(() => import('views/HomeView'));
const MoviesSearhView = lazy(() => import('views/MoviesSearhView'));
const MovieDetailsView = lazy(() => import('views/MovieDetailsView'));
const CastView = lazy(() => import('views/CastView'));
const ReviewsView = lazy(() => import('views/ReviewsView'));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<MoviesSearhView />} />
          <Route path="movies/:movieId" element={<MovieDetailsView />}>
            <Route path="cast" element={<CastView />} />
            <Route path="reviews" element={<ReviewsView />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
