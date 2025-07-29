it('Debe autenticar con PIN válido correctamente', () => {
  cy.autenticarConPIN('5569');
  cy.contains('Filtros', { timeout: 10000 }).should('be.visible');
});

it('Debe mostrar error al ingresar PIN incorrecto', () => {
  cy.autenticarConPIN('1234', true);
});