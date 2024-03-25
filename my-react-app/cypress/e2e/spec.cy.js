describe('press show filter button ', () => {
    beforeEach(() => {
      cy.visit('https://stacksinfo.web.app');
    })
  it(' check if the button text will change', () => { 
    cy.get('.filter-button').should('contain','Show Filters')
    cy.get('.filter-button').click()
    cy.get('.filter-button').should('contain','Hide Filters')
  })
  
  it('c++ checked', () => { 
    cy.get('.filter-button').click()
    cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(0).click();
    cy.get('.filter-option').eq(0).get('[for="C++"]').click()
  })
}) 


describe('Verify that each stack checkbox filter companies based technologies it contains', () => {
      beforeEach(() => {
      cy.visit('https://stacksinfo.web.app');
      cy.get('.filter-button').click();
      cy.get('.options-list').should('not.exist')
    })

  it('Display stacks', () => {  
    let numOfStacks = 9;
    cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').should('have.length', numOfStacks)
    cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').each(($stackElement, index, $stackElements) => {
      cy.get($stackElement).click();
      cy.get('.options-list').should('have.length', (index + 1))      
    }) 
  })
 
}) 


describe('Verify that each stack', () => {
  beforeEach(() => {
    cy.visit('https://stacksinfo.web.app');
    cy.get('.filter-button').click();
    cy.get('.options-list').should('not.exist')
  })
  let numOfStacks = 9;

  for (let index = 0;  index < numOfStacks; index++) {
    it(`display stack number ${index + 1} options`, () => {  
      cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(index).click();
      cy.get('.options-list').should('exist')
    })
  }

}) 
