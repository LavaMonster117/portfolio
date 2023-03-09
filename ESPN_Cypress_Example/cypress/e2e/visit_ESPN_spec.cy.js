describe('just installing and testing if cypress is working as expected', () =>{

  before(() => {
    //you may want to change veiwport parameters to better match your display
    //Make Sure your gitbash file location is /ESPN_Cypress_Example so your 'npx cypress open' actually opens cypress
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
