import LogoCeiba from 'assets/img/logoHotel.png';
import * as React from 'react';

import { NavBrand } from './NavBrand';
import { NavList } from './NavList';
import { HeaderNav } from './styles';

export const NavigationHeader: React.FC = () => {
  const routes = [
    { label: 'Habitaciones', url: '/' },
    { label: 'Reservas', url: '/reservation' },
  ];
  return (
    <HeaderNav>
      <NavBrand imgSrc={LogoCeiba} text="Find Hotel"></NavBrand>
      <NavList items={routes} />
    </HeaderNav>
  );
};
