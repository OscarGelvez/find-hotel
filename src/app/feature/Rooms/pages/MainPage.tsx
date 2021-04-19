import { Layout } from 'app/shared/components/Layout';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ManageRooms } from '../hoc/ManageRooms';

const MainPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Habitaciones" description="Encuentra tu habitación">
      <ManageRooms />
    </Layout>
  );
};

MainPage.displayName = 'HomeMainPage';

export default MainPage;
