import * as PropTypes from 'prop-types';
import * as React from 'react';
// import { BtnEliminarProducto } from '../EliminarProducto';
import { IRoom } from '../../models/Room';

export interface ListRoomsProps {
  /**
   * Lista de habitaciones
   */
  listRooms: Array<IRoom>;
}

export const ListRooms: React.FC<ListRoomsProps> = ({ listRooms }) => {
  return (
    <>
      <div className="row card-rooms">
        <h1>Componente lista</h1>

        <div className="col">
          {listRooms &&
            listRooms.length > 0 &&
            listRooms.map((data, index) => {
              console.log(data);
              return (
                <div className="card room-item" key={index}>
                  <div className="card-header room-item-header ">
                    <h3>{data.hotel.name}</h3>
                    <h4>{data.hotel.score}</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col col-md-4">
                        <img
                          src="https://www.estelarsquare.com/cache/14/b1/14b1cd047a3293198a18cda535abe0f2.jpg"
                          alt="hotel room"
                          width="150px"
                          height="150px"
                        />
                      </div>
                      <div className="col col-md-8">
                        <h5 className="card-title">Special title treatment</h5>
                        <h4>
                          <i className="far fa-money-bill-alt"></i> {data.value}
                        </h4>
                        <p className="card-text">{data.description}</p>
                        <div className="row">
                          <div className="col col-md-6">
                            <CustomField
                              label={'camas'}
                              icon="fa-bed"
                              valueText={`${data.capacity}`}
                            />

                            <CustomField
                              label={'Aire'}
                              icon="fa-wind"
                              value={data.ac === 'Y'}
                            />

                            <CustomField
                              label={'Wifi'}
                              icon="fa-wifi"
                              value={data.wifi === 'Y'}
                            />
                          </div>
                          <div className="col col-md-6">
                            <CustomField
                              label={'Parqueadero'}
                              icon="fa-car"
                              value={data.parking === 'Y'}
                            />
                            <CustomField
                              label={'Baños'}
                              icon="fa-restroom"
                              value={true}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

interface CustomFieldProps {
  /**
   * Título del campo
   */
  label: string;
  /**
   * Icono a mostrar
   */
  icon: string;
  /**
   * Indica si cuenta o no con la propiedad
   */
  value?: boolean;
  /**
   * Valor de la propiedad en texto
   */
  valueText?: string;
}

const CustomField: React.FC<CustomFieldProps> = ({
  label,
  icon,
  value,
  valueText,
}) => {
  return (
    <h6 className="font-weight-bold">
      {label} <i className={`fas ${icon}`}></i> :{' '}
      {valueText && valueText !== '' ? (
        valueText
      ) : value !== undefined && value === true ? (
        <i className="fas fa-check"></i>
      ) : (
        <i className="fas fa-times"></i>
      )}
    </h6>
  );
};

ListRooms.propTypes = {
  listRooms: PropTypes.array.isRequired,
};
