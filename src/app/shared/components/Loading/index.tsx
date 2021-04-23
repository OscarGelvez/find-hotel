import * as React from 'react';
import Spinner from '../../../../assets/img/loading.gif';

/**
 * Componente encargado de renderizar el spinner de carga
 */
const Loading = () => {
  return (
    <>
      <div data-testid="view-spinner" className="container-loader">
        <img
          data-testid="view-spinner-loader"
          src={Spinner}
          alt="loading"
          className="img-loader"
        />
      </div>
    </>
  );
};
export default Loading;
