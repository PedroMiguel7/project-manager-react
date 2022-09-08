describe('Test in my login page', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  // cy.findAllByPlaceholderText(/email/i).type('root@root.com')
  // cy.findAllByPlaceholderText(/senha/i).type('salmo34')

  // cy.findByRole('button', {name: /LOGIN/i}.click()

  // cy.url().should('eq', `${Cypress.config().baseUrl}/home`))
  
  it('Sign ', () => {
    cy.get('#email').type('root@root.com');
    cy.get('#senha').type('*******');
    cy.get('#button').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/home`);
  })
});