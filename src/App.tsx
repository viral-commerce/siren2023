import GlobalStyle from '@/styles/globalStyle';
import { RouterProvider } from 'react-router-dom';
import Router from '@/Router';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </>
  );
}

declare global {
  interface Window {
    Kakao: any;
  }
}

export default App;
