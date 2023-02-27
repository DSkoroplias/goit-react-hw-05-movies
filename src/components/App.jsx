import { BrowserRouter } from 'react-router-dom';

import Navbar from '../modules/Navbar/Navbar';

import UserRoutes from '../UserRoutes';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Navbar />
      <UserRoutes />
    </BrowserRouter>
  );
};
