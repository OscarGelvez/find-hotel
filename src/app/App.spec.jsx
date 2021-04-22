import React from 'react';
import { mount } from '@cypress/react';
import App from './App';
import { roomInfo, roomInfo2 } from './shared/utils/data';
import { bookInfo2 } from './shared/utils/dataBooks';

Cypress.config({
  baseUrl: 'https://find-hotels-json-server.herokuapp.com',
  viewportWidth: 1000,
});
describe('Se renderiza el componente principal de la aplicación FindHotel', () => {
  xit('Workflow de búsqueda, selección y reserva de la habitación', () => {
    mount(<App />);

    // Se intercepta petición y se carga response esperado
    cy.intercept('/rooms', (req) => {
      req.reply([roomInfo2, roomInfo]);
    });

    // Se verifica existencia
    cy.get('[data-testid="form-fromDate"]').should('exist');
    cy.get('[data-testid="form-untilDate"]').should('exist');
    cy.get('[data-testid="form-withAir"]').should('exist');
    cy.get('[data-testid="form-withParking"]').should('exist');
    cy.get('[data-testid="form-button-find"]').should('exist');

    // Se ingresa información en cada campo
    cy.get('[data-testid="form-fromDate"]').type('2021-04-22');
    cy.get('[data-testid="form-untilDate"]').type('2021-04-28');
    cy.get('[data-testid="form-withAir"]').check();
    cy.get('[data-testid="form-withParking"]').check();

    // Se presiona botón "Encuentralo!"
    cy.get('[data-testid="form-button-find"]').click();

    // Se intercepta petición de búsqueda filtrada y se carga response esperado
    cy.intercept(
      'rooms?available_from_lte=2021-04-22&available_until_gte=2021-04-28&ac=Y&parking=Y',
      (req) => {
        req.reply([roomInfo]);
      }
    );
    cy.wait(3000);
    // Se presiona el botón para seleccionar la habitación
    cy.get('[data-testid="form-button-load-detail"]').click({ multiple: true });

    // Se presiona el botón para reservar la habitación
    cy.get('[data-testid="form-detail-button-book"]').click();

    // Se valida la existencia del modal y sus campos
    cy.get('[data-testid="modal-book"]').should('exist');
    cy.get('[data-testid="modal-book-form-name"]').should('exist');
    cy.get('[data-testid="modal-book-form-email"]').should('exist');
    cy.get('[data-testid="modal-book-form-identification-type"]').should(
      'exist'
    );
    cy.get('[data-testid="modal-book-form-identification"]').should('exist');
    cy.get('[data-testid="modal-book-form-btn-cancel"]').should('exist');
    cy.get('[data-testid="modal-book-form-btn-submit"]').should('exist');

    // Ingresa los datos de la reserva
    cy.get('[data-testid="modal-book-form-name"]').type('Oscar Gelvez Test');
    cy.get('[data-testid="modal-book-form-email"]').type('test@cypress.com');
    cy.get('[data-testid="modal-book-form-identification-type"]').select('1');
    cy.get('[data-testid="modal-book-form-identification"]').type('123456789');

    // Se almacena la reserva
    cy.get('[data-testid="modal-book-form-btn-submit"]').click();

    // Interceptar el resultado de la peticón Reservar
    // cy.intercept(
    //   'rooms?available_from_lte=2021-04-22&available_until_gte=2021-04-28&ac=Y&parking=Y',
    //   (req) => {
    //     req.reply([roomInfo]);
    //   }
    // );
  });

  it('Workflow de búsqueda y eliminación de reserva guardada', () => {
    mount(<App />);

    // Se intercepta petición y se carga response esperado
    cy.intercept('/rooms', (req) => {
      req.reply([roomInfo2, roomInfo]);
    });

    cy.intercept(
      '/booking?bookData.email=test@cypress.com&bookData.identification_type=1&bookData.identification=123456789',
      (req) => {
        req.reply([bookInfo2]);
      }
    );

    cy.intercept('/booking/1', (req) => {
      req.reply(0);
    });

    cy.wait(3000);
    // Se verifica existencia
    cy.get('[data-testid="div-header-nav"]').should('exist');
    cy.get('[data-testid="nav-list"]').should('exist');
    cy.get('[data-testid="nav-item-li"]').should('exist');

    cy.contains('Reservas').click();
    // Ingresa a la vista de Reservas
    // cy.get('a[href*="/booking"]').click();

    // // Se valida la existencia de los campos del formulario
    cy.get('[data-testid="form-find-bookings"]').should('exist');
    cy.get('[data-testid="form-bookings-email"]').should('exist');
    cy.get('[data-testid="form-bookings-identification_type"]').should('exist');
    cy.get('[data-testid="form-bookings-identification"]').should('exist');
    cy.get('[data-testid="form-bookings-btn-submit"]').should('exist');
    cy.get('[data-testid="form-bookings-btn-reset"]').should('exist');

    // // Se ingresa la información del formulario
    cy.get('[data-testid="form-bookings-email"]').type('test@cypress.com');
    cy.get('[data-testid="form-bookings-identification_type"]').select('1');
    cy.get('[data-testid="form-bookings-identification"]').type('123456789');

    // // Se presiona el botón para buscar la reserva
    cy.get('[data-testid="form-bookings-btn-submit"]').click();

    cy.wait(2000);
    cy.get('[data-testid="card-information-bookigns"]').should('exist');

    cy.get('[data-testid="list-book-btn-cancel"]').click();

    cy.get('[data-testid="modal-book-delete"]').should('exist');

    cy.get('[data-testid="modal-book-delete-cancel"]').click();

    // Se intercepta petición de búsqueda filtrada y se carga response esperado
    // cy.intercept(
    //   '/booking?bookData.email=test@cypress.com&bookData.identification-type=1&bookData.identification=123456789',
    //   (req) => {
    //     req.reply([bookInfo2]);
    //   }
    // );

    // Interceptar el resultado de la peticón Reservar
    // cy.intercept(
    //   'rooms?available_from_lte=2021-04-22&available_until_gte=2021-04-28&ac=Y&parking=Y',
    //   (req) => {
    //     req.reply([roomInfo]);
    //   }
    // );
  });
});
