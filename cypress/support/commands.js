
Cypress.Commands.add('autenticarConPIN', (pin = '5569', esperarError = false) => {
  cy.visit('https://www.selaski.com/public/reports/shared?token=28b8140da2164226f7d1ab0626547985903b');

  cy.get('input').eq(0).type(pin[0]);
  cy.get('input').eq(1).type(pin[1]);
  cy.get('input').eq(2).type(pin[2]);
  cy.get('input').eq(3).type(pin[3]);

  cy.contains('button', 'Ingresar').click();

  if (esperarError) {
    // Validación de mensaje de error si el PIN es incorrecto
    cy.get('p.text-red-500')
      .should('be.visible')
      .and('contain.text', 'Código incorrecto');

    cy.get('input').should('have.length', 4);
  } else {
    // Validación de ingreso exitoso
    cy.contains('Filtros', { timeout: 10000 }).should('be.visible');
  }
});