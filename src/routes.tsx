import Layout from './Layout';
import CostPage from './pages/CostPage';
import GlobalApplyPage from './pages/GlobalApplyPage';
import HomePage from './pages/HomePage';
import KoreaApplyPage from './pages/KoreaApplyPage';
import ProgressPage from './pages/ProgressPage';
import ReviewCompletePage from './pages/ReviewCompletePage';
import ReviewFirstPage from './pages/ReviewFirstPage';
import ReviewLastPage from './pages/ReviewLastPage';
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
      { path: '/patent-review/confirm', element: <ReviewLastPage /> },
      { path: '/patent-review/complete', element: <ReviewCompletePage /> },
      { path: '/korea-apply', element: <KoreaApplyPage /> },
      { path: '/global-apply', element: <GlobalApplyPage /> },
      { path: '/cost', element: <CostPage /> },
      { path: '/progress', element: <ProgressPage /> },
    ],
  },
];

export default routes;
