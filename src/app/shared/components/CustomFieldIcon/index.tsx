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
    <h6 data-testid="custom-field" className="font-weight-bold">
      {label} <i className={`fas ${icon}`}></i> :{' '}
      {valueText && valueText !== '' ? (
        <span data-testid="custom-field-value-text">{valueText}</span>
      ) : value !== undefined && value === true ? (
        <i className="fas fa-check" data-testid="custom-field-value-true"></i>
      ) : (
        <i className="fas fa-times" data-testid="custom-field-value-false"></i>
      )}
    </h6>
  );
};

CustomField.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.bool,
  valueText: PropTypes.string,
};
