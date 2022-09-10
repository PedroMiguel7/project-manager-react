describe('Test in my login page', () => {

  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Sign ', () => {
    cy.get('#email').type('root@root.com');
    cy.get('#senha').type('*******');
    cy.get('#button').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/home`);
  })
});