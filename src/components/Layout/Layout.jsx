import { NavLink, Outlet } from 'react-router-dom';
import { StyledHeader } from './Layout.styled';

export const Layout = () => {
  return (
    <>
       <Suspense fallback={<Loader />}>
      <StyledHeader>
        <nav>
          <NavLink className="header-link" to="/">
            Home
          </NavLink>
          <NavLink className="header-link" to="/movies">
            Movies
          </NavLink>
        </nav>
      </StyledHeader>
      <main>
        <Outlet />
      </main>
      </Suspense>
    </>
  );
};