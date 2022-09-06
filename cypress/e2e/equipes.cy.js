describe('Test in my equipes page', () => {
  
  beforeEach(() => {
    cy.visit('/')
    cy.get('#email').type('root@root.com');
    cy.get('#senha').type('******');
    cy.get('#button').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/home`);
  })

  it('Equipes ', () => {
    cy.get('#SideEquipe').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/equipes`);

    cy.get('#NovaEquipe').click();
    cy.get('#nome').type('CYPRESS 2.0');
    cy.get('#cancelarAdd').click();

    cy.get('#OrdenaEquipe').click();
    cy.get('#OrdenaEquipe').click();

    cy.get('#pesquisa').type('AB');
  })

  it('Card Equipe', () => {
    cy.get('#SideEquipe').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/equipes`);

    cy.get('#long-button').click();
    cy.get('#EditaEquipe').click();
    //cy.get('#confirmarEdicao').click();
    cy.get('#cancelarEdicao').click();

    cy.get('#long-button').click();
    cy.get('#DeletaEquipe').click();
    //cy.get('#confirmarDeletar').click();
    cy.get('#cancelarDeletar').click();

    cy.get('#CardEquipe').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/equipes/:id`);
    cy.get('#voltar').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/equipes`);
  })

});