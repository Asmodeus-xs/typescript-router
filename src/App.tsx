import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UpcomingSessionContextProvider from './store/session-context.tsx';

import HomePage from './pages/Home.tsx';
import SessionsPage from './pages/Sessions.tsx';
import SessionPage from './pages/Session.tsx';
import Root from './pages/Root.tsx';

const Router = createBrowserRouter([
  {
    path: 'typescript-router/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: 'sessions', element: <SessionsPage /> },
      { path: 'sessions/:id', element: <SessionPage /> },
    ],
  },
]);

function App() {
  return (
    <UpcomingSessionContextProvider>
      <RouterProvider router={Router} />
    </UpcomingSessionContextProvider>
  );
}

export default App;
