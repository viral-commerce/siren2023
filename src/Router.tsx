import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { IntroPage, TestPage } from '@/pages';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<IntroPage />} />
      <Route path="/test/:id" element={<TestPage />} />
    </>
  )
);

export default Router;
