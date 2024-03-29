describe('Test in my projetos page', () => {
  
  beforeEach(() => {
    cy.visit('/')
    cy.get('#email').type('root@root.com');
    cy.get('#senha').type('******');
    cy.get('#button').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/home`);
  })

  it('Projetos ', () => {
    cy.get('#SideProjeto').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/projetos`);

    cy.get('#OrdenaProjeto').click();
    cy.get('#OrdenaProjeto').click();

    cy.get('#filtro').click();
    cy.get('#EMANDAMENTO').click();
    cy.get('#salvarFiltro').click();

    cy.get('#pesquisa').type('AB');
  })

  it('Card Projeto', () => {
    cy.get('#SideProjeto').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/projetos`);

    cy.get('#long-button').click();
    cy.get('#EditaProjeto').click();
    //cy.get('#confirmarEdicao').click();
    cy.get('#CancelarEdicao').click();

    cy.get('#long-button').click();
    cy.get('#DeletaProjeto').click();
     //cy.get('#confirmarDeletar').click();
    cy.get('#cancelarDeletar').click();

    cy.get('#CardProjeto').click();
    //cy.url().should('eq', `${Cypress.config().baseUrl}/projetos/:id`);
    cy.get('#voltar').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/projetos`);
  })

});