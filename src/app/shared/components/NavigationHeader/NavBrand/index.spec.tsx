import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { NavBrand } from './index';

afterEach(cleanup);

it('rederizar el componente NavBrand sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <NavBrand imgSrc={''} text={''} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente NavBrand cuando se envía una imagen', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <NavBrand
        imgSrc={'htpp://image.com/img.png'}
        text={'Text or logo header'}
      />
    </BrowserRouter>
  );
  expect(getByTestId('div-brand')).toContainElement(getByTestId('link-brand'));
  expect(getByTestId('div-brand')).toContainElement(getByTestId('image-brand'));
});

it('renderiza el componente NavBrand cuando se envía un texto', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <NavBrand imgSrc={''} text={'Text or logo header'} />
    </BrowserRouter>
  );
  expect(getByTestId('div-brand')).toContainElement(getByTestId('link-brand'));
  expect(getByTestId('div-brand')).toContainElement(getByTestId('text-brand'));
});

it('Compara snapshot del componente NavBrand cuando se envía imagen', () => {
  const element = renderer
    .create(
      <BrowserRouter>
        <NavBrand
          imgSrc={'htpp://image.com/img.png'}
          text={'Text or logo header'}
        />
      </BrowserRouter>
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});

it('Compara snapshot del componente NavBrand cuando se envía texto', () => {
  const element = renderer
    .create(
      <BrowserRouter>
        <NavBrand imgSrc={''} text={'Text or logo header'} />
      </BrowserRouter>
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
