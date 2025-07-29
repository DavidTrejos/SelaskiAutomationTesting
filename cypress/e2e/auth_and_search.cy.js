describe('Flujo de Autenticación y Búsqueda de Embarque', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('https://www.selaski.com/public/reports/shared?token=28b8140da2164226f7d1ab0626547985903b');
  });

  it('Debe autenticar con PIN válido correctamente', () => {
    const pin = '5569';

    // Llenar cada input con un dígito del PIN
    cy.get('input').eq(0).type(pin[0]);
    cy.get('input').eq(1).type(pin[1]);
    cy.get('input').eq(2).type(pin[2]);
    cy.get('input').eq(3).type(pin[3]);

    // Hacer clic en el botón "Ingresar"
    cy.contains('button', 'Ingresar').click();

    // Validar que entramos a la vista de filtros
    cy.contains('Filtros', { timeout: 10000 }).should('be.visible');

    // Validar que hay resultados visibles
    cy.get('.table-list').should('exist');
  });

  it('Debe mostrar error al ingresar PIN incorrecto', () => {
    const pin = '1234';

    cy.get('input').eq(0).type(pin[0]);
    cy.get('input').eq(1).type(pin[1]);
    cy.get('input').eq(2).type(pin[2]);
    cy.get('input').eq(3).type(pin[3]);

    cy.contains('button', 'Ingresar').click();

    cy.get('p.text-red-500')
    .should('be.visible')
    .and('contain.text', 'Código incorrecto');

    cy.get('input').should('have.length', 4);
  });
});
