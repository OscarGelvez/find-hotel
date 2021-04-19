import { Layout } from 'app/shared/components/Layout';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ManageBooking } from '../hoc/ManageBooking';

const HomeMainPage: React.FC<RouteComponentProps> = () => (
  <Layout title="Reservar" description="Consulte las reservaciones hechas">
    <ManageBooking />
  </Layout>
);

HomeMainPage.displayName = 'HomeMainPage';

export default HomeMainPage;
