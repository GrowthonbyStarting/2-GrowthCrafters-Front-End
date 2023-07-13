import Layout from './Layout';
import HomePage from './pages/HomePage';
import ReviewFirstPage from './pages/ReviewFirstPage';
import ReviewSecondPage from './pages/ReviewSecondPage';
import ReviewThirdPage from './pages/ReviewThirdPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/patent-review', element: <ReviewFirstPage /> },
      { path: '/patent-review/category', element: <ReviewSecondPage /> },
      { path: '/patent-review/form', element: <ReviewThirdPage /> },
      // { path: '/patent-review/complete', element: <ReviewLastPage /> },
    ],
  },
];

export default routes;
