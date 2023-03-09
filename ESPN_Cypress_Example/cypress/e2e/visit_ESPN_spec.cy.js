describe('just installing and testing if cypress is working as expected', () =>{

  before(() => {
    const WIDTH = 1600
    const HEIGHT = 800

    cy.viewport(WIDTH, HEIGHT)
    cy.visit('https://www.espn.com/')
    
  })
  
  it('Simple test: #global-nav, navigating to MLB ', () => {
    cy.get('.logo-header > a').contains('ESPN')
    cy.get('.more > [href="#"]').click()
    cy.get('.menu-mlb > a').click()
    cy.wait(3000)
    cy.get('.global-nav-container').should('exist')
    cy.get('.positioning > a > .link-text').contains('MLB')
  })
})