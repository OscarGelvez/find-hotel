import { Layout } from 'app/shared/components/Layout';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ManageDetail } from '../hoc/ManageDetail';

const DetailPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout
      title="Detalle de habitación"
      description="Detalles de tu habitación"
    >
      <ManageDetail />
    </Layout>
  );
};

DetailPage.displayName = 'DetailRoomPage';

export default DetailPage;
