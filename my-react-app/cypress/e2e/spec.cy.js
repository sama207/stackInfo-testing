describe('press show filter button ', () => {
  it(' check if the button text will change', () => {
    cy.visit('https://stacksinfo.web.app')
    cy.get('.filter-button').should('contain','Show Filters')
    cy.get('.filter-button').click()
    cy.get('.filter-button').should('contain','Hide Filters')
  })
  
}) 
describe('press backend then c++', () => {
  it('c++ checked', () => {
    cy.visit('https://stacksinfo.web.app')
    cy.get('.filter-button').click()
    cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(0).click();
    cy.get('.filter-option').eq(0).get('[for="C++"]').click()
       
  })
  
}) 
