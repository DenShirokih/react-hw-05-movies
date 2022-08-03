import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { HomeView } from 'views/HomeView';
import { MovieDetailsView } from 'views/MovieDetailsView';
import { CastView } from 'views/CastView';
import { ReviewsView } from 'views/ReviewsView';
import { MoviesSearhView } from 'views/MoviesSearhView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="movies" element={<MoviesSearhView />} />
        <Route path="movies/:movieId" element={<MovieDetailsView />}>
          <Route path="cast" element={<CastView />} />
          <Route path="reviews" element={<ReviewsView />} />
        </Route>
        <Route path="*" element={<HomeView />} />
      </Route>
    </Routes>
  );
};
