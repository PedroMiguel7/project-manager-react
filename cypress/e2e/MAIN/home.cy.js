describe('Test in my home page', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.get('#email').type('root@root.com');
    cy.get('#senha').type('******');
    cy.get('#button').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/home`);
  })

  // cy.findAllByPlaceholderText(/email/i).type('root@root.com')
  // cy.findAllByPlaceholderText(/senha/i).type('salmo34')

  // cy.findByRole('button', {name: /LOGIN/i}.click()

  // cy.url().should('eq', `${Cypress.config().baseUrl}/home`))
  
  it('Home ', () => {
    cy.get('#adicionaProjeto').click();
    cy.get('#nome').type('teste no e2e');
    cy.get('#descricao').type('até que o cypress é maneiro');
    cy.get('#selecionaEquipe').click();
    cy.get('#escolheEquipe').click();
    cy.get('.cancelaAcao').click();

    //cy.get('#BotaoDetalhar').click();

    cy.get('#SideTema').click();
    cy.get('#SideLogout').click();
  })
});