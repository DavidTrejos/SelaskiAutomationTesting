/**
 * Suite de pruebas: Filtrado de embarques
 * Author: @DavidTrejos 
 * Esta suite verifica que el sistema permita aplicar correctamente el filtro por número de embarque,
 * asegurando que los datos mostrados coincidan con el embarque consultado.
 */

describe('Filtrado de embarques', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  /**
   * Caso de prueba: Filtrado exitoso por número de embarque
   * Author: @DavidTrejos 
   * Este test autentica al usuario con un PIN válido, aplica el filtro por "Embarque",
   * y verifica que el embarque especificado junto con sus detalles se muestren correctamente
   * en los resultados.
   */

  it('Debe filtrar correctamente por embarque', () => {
    cy.autenticarConPIN('5569');

    const numeroEmbarque = 'CRT23400401-02';

    cy.contains('app-atom-filter-tab', 'Filtros').click();

    cy.get('.filter-list-container', { timeout: 10000 }).should('be.visible');

    cy.get('div.select-btn').contains('Seleccionar').should('be.visible').click();

    cy.get('div.search-options', { timeout: 10000 })
      .should('be.visible')
      .then(() => {
    cy.contains('p', 'Embarque')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });
    });

    cy.waitUntil(() =>
      cy.get('input[placeholder="Escribe aquí tu búsqueda"]').then($input => !$input.is(':disabled')),
      {
        errorMsg: 'El input sigue deshabilitado después de seleccionar el filtro',
        timeout: 10000,
        interval: 500
      }
    );

    cy.get('input[placeholder="Escribe aquí tu búsqueda"]')
      .type(`${numeroEmbarque}{enter}`);

      cy.contains(numeroEmbarque, { timeout: 10000 }).should('exist');
      cy.contains('Proveedor API 1', { timeout: 10000 }).should('exist');
      cy.contains('01/01/2024', { timeout: 10000 }).should('exist');
      cy.contains('No Seleccionado', { timeout: 10000 }).should('exist');
    
  });

});

