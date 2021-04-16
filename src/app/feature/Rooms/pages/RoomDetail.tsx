import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { ManageDetail } from '../hoc/ManageDetail';
import { RouteComponentProps } from 'react-router-dom';

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
