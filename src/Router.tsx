import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { IntroPage } from '@/pages';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<IntroPage />} />
    </>
  )
);

export default Router;
