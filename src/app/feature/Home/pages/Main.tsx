import { Layout } from 'app/shared/components/Layout';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { HolaMundo } from '../components/HolaMundo';

const HomeMainPage: React.FC<RouteComponentProps> = () => (
  <Layout title="Home" description="Home de la aplicación">
    <HolaMundo msg="Hola desde la página home!"/>
  </Layout>
);

HomeMainPage.displayName = 'HomeMainPage';

export default HomeMainPage;
