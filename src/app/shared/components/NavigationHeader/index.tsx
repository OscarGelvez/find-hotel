import * as React from 'react';
import { HeaderNav } from './styles';
import LogoCeiba from 'assets/img/logoHotel.png';
import { NavBrand } from './NavBrand';
import { NavList } from './NavList';

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
