describe('Test in my pessoas page', () => {
  
  beforeEach(() => {
    cy.visit('/')
    cy.get('#email').type('root@root.com');
    cy.get('#senha').type('salmo34');
    cy.get('#button').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/home`);
  })

  it('Equipes ', () => {
    cy.get('#SidePessoa').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/pessoas`);

    cy.get('#NovaPessoa').click();
    cy.get('#nome').type('CYPRESS 2.0');
    cy.get('#selecionaFuncao').click();
    cy.get('#escolheFuncao').click();
    cy.get('#selecionaEquipe').click();
    cy.get('#escolheEquipe').click();
    //cy.get('#aceitarAdd').click();
    cy.get('#cancelarAdd').click();

    cy.get('#OrdenaPessoa').click();
    cy.get('#OrdenaPessoa').click();

    cy.get('#pesquisa').type('AB');
  })

  it('Card Pessoa', () => {
    cy.get('#SidePessoa').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/pessoas`);

    cy.get('#CardPessoa').click();
    //cy.url().should('eq', `${Cypress.config().baseUrl}/pessoas/:id`);
    cy.get('#voltar').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/pessoas`);
  })

});