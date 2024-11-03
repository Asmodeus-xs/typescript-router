import { Outlet } from 'react-router-dom';
import Header from '../components/Navigation/MainHeader.tsx';
export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

