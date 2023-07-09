import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { IntroPage, ResultPage, TestPage } from '@/pages';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<IntroPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/result" element={<ResultPage />} />
    </>
  )
);

export default Router;
