import * as PropTypes from 'prop-types';
import * as React from 'react';

import { NavItem } from '../NavItem';
import { NavListUl } from './styles';

interface INavListProps {
  items: { label: string; url: string }[];
}

export const NavList: React.FC<INavListProps> = ({ items }) => {
  return (
    <NavListUl data-testid="nav-list">
      {items.map(({ label, url }) => (
        <li key={label} data-testid="nav-item-li">
          <NavItem label={label} to={url} />
        </li>
      ))}
    </NavListUl>
  );
};

NavList.propTypes = {
  items: PropTypes.array.isRequired,
};
