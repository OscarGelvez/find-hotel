import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { CustomField } from './index';

afterEach(cleanup);

it('rederizar el componente CustomField con valor boolean true sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CustomField label={'Baños'} icon={'fa-restroom'} value={true} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('rederizar el componente CustomField con valor boolean false sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CustomField label={'Baños'} icon={'fa-restroom'} value={false} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('rederizar el componente CustomField con valor texto personalizado sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CustomField
      label={'Dirección'}
      icon={'fa-map-marked-alt'}
      valueText={'Calle 12 # 34-56 Av. siempre viva'}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente CustomField y verifica existencia de componentes hijos valor boolean true', () => {
  const { getByTestId } = render(
    <CustomField label={'Baños'} icon={'fa-restroom'} value={true} />
  );
  expect(getByTestId('custom-field')).toContainElement(
    getByTestId('custom-field-value-true')
  );
});

it('renderiza el componente CustomField y verifica existencia de componentes hijos valor boolean false', () => {
  const { getByTestId } = render(
    <CustomField label={'Baños'} icon={'fa-restroom'} value={false} />
  );
  expect(getByTestId('custom-field')).toContainElement(
    getByTestId('custom-field-value-false')
  );
});

it('renderiza el componente CustomField y verifica existencia de componentes hijos texto personalizado', () => {
  const { getByTestId } = render(
    <CustomField
      label={'Dirección'}
      icon={'fa-map-marked-alt'}
      valueText={'Calle 12 # 34-56 Av. siempre viva'}
    />
  );
  expect(getByTestId('custom-field')).toContainElement(
    getByTestId('custom-field-value-text')
  );
});

it('Compara snapshot del componente CustomField con valor boolean en true', () => {
  const element = renderer
    .create(<CustomField label={'Baños'} icon={'fa-restroom'} value={true} />)
    .toJSON();
  expect(element).toMatchSnapshot();
});

it('Compara snapshot del componente CustomField con valor boolean en false', () => {
  const element = renderer
    .create(<CustomField label={'Baños'} icon={'fa-restroom'} value={false} />)
    .toJSON();
  expect(element).toMatchSnapshot();
});

it('Compara snapshot del componente CustomField con texto personalizado', () => {
  const element = renderer
    .create(
      <CustomField
        label={'Dirección'}
        icon={'fa-map-marked-alt'}
        valueText={'Calle 12 # 34-56 Av. siempre viva'}
      />
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
