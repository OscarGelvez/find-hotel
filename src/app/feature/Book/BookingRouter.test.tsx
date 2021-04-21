import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import { BookingRouter } from './BookingRouter';

test('Prueba a componente Router', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <BookingRouter />
    </Router>
  );
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/Cargando página.../i)).toBeInTheDocument();
});
