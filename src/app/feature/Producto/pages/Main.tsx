import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { ManageRooms } from '../hoc/ManageRooms';
import { RouteComponentProps } from 'react-router-dom';

const MainPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Habitaciones" description="Encuentra tu habitación">
      <ManageRooms />
    </Layout>
  );
};

MainPage.displayName = 'HomeMainPage';

export default MainPage;
