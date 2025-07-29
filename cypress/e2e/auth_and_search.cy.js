/**
 * Caso de prueba: Autenticación exitosa con PIN válido.
 * Author: @DavidTrejos 
 * Este test verifica que al ingresar un PIN válido, el sistema
 * permite el ingreso y muestra la interfaz de filtros.
 */

it('Debe autenticar con PIN válido correctamente', () => {
  cy.autenticarConPIN('5569');
  cy.contains('Filtros', { timeout: 10000 }).should('be.visible');
});

/**
 * Caso de prueba: Error al autenticar con PIN incorrecto.
 * Author: @DavidTrejos
 * Este test valida que el sistema muestre un error adecuado cuando
 * el usuario ingresa un PIN incorrecto.
 */

it('Debe mostrar error al ingresar PIN incorrecto', () => {
  cy.autenticarConPIN('1234', true);
});