import '@testing-library/jest-dom';

import { cleanup, render, wait } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { IRoom } from '../../../feature/Rooms/models/Room';
import { roomInfo } from '../../utils/data';
import { CardInformation, ModalFormBook } from './index';

const newRoom: IRoom = roomInfo;
const roomId = 50;
afterEach(cleanup);

it('rederizar el componente CardInformation sin errores en modo detalle', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CardInformation
      data={newRoom}
      selectedRoom={roomId}
      saveBookingRoom={() => null}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente CardInformation y verifica existencia de componentes hijos en modo detalle', () => {
  const { getByTestId } = render(
    <CardInformation
      data={newRoom}
      selectedRoom={roomId}
      saveBookingRoom={() => null}
    />
  );

  expect(getByTestId('card-information')).toContainElement(
    getByTestId('modal-form-book')
  );

  expect(getByTestId('card-information')).toContainElement(
    getByTestId('form-field-hotel-desc')
  );

  expect(getByTestId('card-information')).toContainElement(
    getByTestId('star-score')
  );
});

it('Compara snapshot del componente CardInformation en modo detalle', () => {
  const element = renderer
    .create(
      <CardInformation
        data={newRoom}
        selectedRoom={roomId}
        saveBookingRoom={() => null}
      />
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});

it('rederizar el componente CardInformation sin errores en modo lista', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CardInformation data={newRoom} loadDetailRoom={() => null} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente CardInformation y verifica existencia de componentes hijos en modo lista', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <CardInformation data={newRoom} loadDetailRoom={() => null} />
    </BrowserRouter>
  );

  expect(getByTestId('card-information')).toContainElement(
    getByTestId('form-button-load-detail')
  );
});

it('Compara snapshot del componente CardInformation en modo lista', () => {
  const element = renderer
    .create(
      <BrowserRouter>
        <CardInformation data={newRoom} loadDetailRoom={() => null} />
      </BrowserRouter>
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});

it('Se debe renderizar correctamente el modal para realizar la reserva', () => {
  const wrapper = shallow(
    <CardInformation
      data={newRoom}
      selectedRoom={roomId}
      saveBookingRoom={() => null}
    />
  );

  const buttonBook = wrapper.find('#form-detail-button');
  buttonBook.simulate('click');

  const { getByTestId } = render(
    <CardInformation
      data={newRoom}
      selectedRoom={roomId}
      saveBookingRoom={() => null}
    />
  );

  expect(getByTestId('card-information')).toContainElement(
    getByTestId('modal-book')
  );

  expect(getByTestId('card-information')).toContainElement(
    getByTestId('modal-book-form')
  );

  expect(getByTestId('modal-book-form')).toContainElement(
    getByTestId('modal-book-form-name')
  );
  expect(getByTestId('modal-book-form')).toContainElement(
    getByTestId('modal-book-form-email')
  );

  expect(getByTestId('modal-book-form')).toContainElement(
    getByTestId('modal-book-form-identification-type')
  );
  expect(getByTestId('modal-book-form')).toContainElement(
    getByTestId('modal-book-form-identification')
  );
  expect(getByTestId('modal-book-form')).toContainElement(
    getByTestId('modal-book-form-btn-cancel')
  );

  expect(getByTestId('modal-book-form')).toContainElement(
    getByTestId('modal-book-form-btn-submit')
  );
});

describe('Pruebas de componente ModalFormBook ', () => {
  let wrapper: any;
  beforeEach(() => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    wrapper = mount(
      <ModalFormBook saveBookingRoom={() => null} dataRoom={newRoom} />,
      { attachTo: container }
    );
  });

  it('El modal se debe renderizar bien y cerrar al cancelar', () => {
    const buttonCancel = wrapper.find('#modal-form-btn-cancel');
    buttonCancel.simulate('click');
  });

  it('El modal se debe renderizar bien y cerrar al presionar boton submit', async () => {
    const name = wrapper.find('#book-form-name').first();
    const email = wrapper.find('#book-form-email').first();
    const ident_type = wrapper.find('#book-form-select').first();
    const identy = wrapper.find('#book-form-identification').first();

    const fromDateBook = wrapper.find('#fromDateBook').first();
    const untilDateBook = wrapper.find('#untilDateBook').first();

    await wait(() => {
      fromDateBook.simulate('change', {
        target: {
          name: 'fromDateBook',
          value: '2021-04-26',
        },
      });
    });

    await wait(() => {
      untilDateBook.simulate('change', {
        target: {
          name: 'untilDateBook',
          value: '2021-04-30',
        },
      });
    });

    await wait(() => {
      name.simulate('change', {
        target: {
          name: 'name',
          value: 'oscar',
        },
      });
    });

    await wait(() => {
      email.simulate('change', {
        target: {
          name: 'email',
          value: 'test@test.com',
        },
      });
    });

    await wait(() => {
      ident_type.simulate('change', {
        target: {
          name: 'identification_type',
          value: '1',
        },
      });
    });

    await wait(() => {
      identy.simulate('change', {
        target: {
          name: 'identification',
          value: '123456901',
        },
      });
    });

    await wait(() => {
      const buttonSubmit = wrapper.find('#modal-form-btn-submit');
      buttonSubmit.simulate('submit');
    });
  });
});

it('renderiza el componente CardInformation y se despliega LoadDetailRoom en modo lista', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const load = () => {
    return 1;
  };
  const wrapper = mount(
    <BrowserRouter>
      <CardInformation data={newRoom} loadDetailRoom={() => load()} />
    </BrowserRouter>,
    { attachTo: container }
  );

  const buttonDetail = wrapper.find('#btn-select-detail');
  buttonDetail.simulate('click');
});
