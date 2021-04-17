import * as PropTypes from 'prop-types';
import * as React from 'react';

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

/**
 * Componente encargado de renderizar cada item de la card con su respectivo icono y valor
 * @param param0
 * @returns Sección con item y valor de la habitación
 */
export const CustomField: React.FC<CustomFieldProps> = ({
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

CustomField.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  valueText: PropTypes.string.isRequired,
};
