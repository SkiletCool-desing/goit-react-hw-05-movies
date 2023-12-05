import { NavLink, Outlet } from 'react-router-dom';
import { Suspense, Loader } from 'react';
import { StyledHeader} from './Layout.styled';

export const Layout = () => {
  return (
    <>
       
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
          <Suspense fallback={<Loader />}>
          <Outlet />
         </Suspense> 
      </main>
      
    </>
  );
};