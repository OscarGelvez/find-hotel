import { Link } from 'app/shared/components/Link';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import { NavItemDiv } from './styles';

interface INavItemProps {
  label: string;
  to: string;
}

export const NavItem: React.FC<INavItemProps> = ({ label, to }) => (
  <NavItemDiv data-testid="nav-item">
    <Link data-testid="link-nav-item" to={to} replace={true}>
      {label}
    </Link>
  </NavItemDiv>
);

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
