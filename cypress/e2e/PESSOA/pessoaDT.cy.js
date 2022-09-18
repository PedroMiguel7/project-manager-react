describe('Test in my pessoasDT page', () => {
  
  beforeEach(() => {
    cy.visit('/')
    cy.get('#email').type('root@root.com');
    cy.get('#senha').type('******');
    cy.get('#button').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/home`);
  })

  it('Pessoa Dt', () => {
    cy.get('#SidePessoa').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/pessoas`);

    cy.get('#CardPessoa').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/pessoas/:id`);
    
    cy.get('#voltar').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/pessoas`);
  })

});