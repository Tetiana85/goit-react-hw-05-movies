import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './Header.module.css';

export const Header = () => {
  const StyledLink = styled(NavLink)`
    color: #212121;
    font-weight: 700;
    font-size: 24px;

    &.active {
      color: #e0075e;
    }
  `;

  return (
    <nav className={css.header}>
      <StyledLink className={css.list} to="/">
        HOME
      </StyledLink>
      <StyledLink className={css.list} to="movies">
        MOVIES
      </StyledLink>
    </nav>
  );
};
