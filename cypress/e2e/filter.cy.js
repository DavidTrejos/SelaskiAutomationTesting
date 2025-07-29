describe('Filtrado de embarques', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Debe filtrar correctamente por embarque', () => {
    cy.autenticarConPIN('5569');

    const numeroEmbarque = 'CRT23400401-02';

    cy.contains('app-atom-filter-tab', 'Filtros').click();

    cy.get('.filter-list-container', { timeout: 10000 }).should('be.visible');

    cy.get('div.select-btn').contains('Seleccionar').click();

    cy.get('div.search-options')
      .should('be.visible')
      .contains('p', 'Embarque')
      .click();

    cy.wait(5500); 
    
    cy.waitUntil(() =>
      cy.get('input[placeholder="Escribe aquí tu búsqueda"]').then($input => !$input.is(':disabled')),
      {
        errorMsg: 'El input sigue deshabilitado después de seleccionar el filtro',
        timeout: 10000,
        interval: 500
      }
    );

    cy.get('input[placeholder="Escribe aquí tu búsqueda"]')
      .type(numeroEmbarque);

    cy.contains(numeroEmbarque, { timeout: 10000 }).should('exist');
    cy.contains('Proveedor API 1', { timeout: 10000 }).should('exist');
    cy.contains('01/01/2024', { timeout: 10000 }).should('exist');
    cy.contains('No Seleccionado', { timeout: 10000 }).should('exist');
  });

});
