//Moved 
describe('Verify that selecting combinations of technologies display right companies number -testing with OR logic for frontend-', () => {
    beforeEach(() => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.filter-button').click();
        cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(4).click();
    });
  
    it('Verify that react with next.js display 12 companies', () => { 
        cy.get('.filter-option').get('[for="React"]').click()
        cy.get('.filter-option').get('[for="Next.js"]').click() 
        cy.get('.card').should('have.length', (12))
  
    })
    it('Verify that vue.js with nuxt.js display 7 companies', () => { 
        cy.get('.filter-option').get('[for="Vue.js"]').click()
        cy.get('.filter-option').get('[for="Nuxt.js"]').click()
        cy.get('.card').should('have.length', 7)
    })
    it('Verify that nuxt.js with solid.js display no companies', () => {
        cy.get('.filter-option').get('[for="Nuxt.js"]').click() 
        cy.get('.filter-option').get('[for="Solid.js"]').click() 
        cy.get('.card').should('have.length', 0)
    })
  })
  
  describe('Verify that selecting combinations of technologies display right companies number -testing with OR logic for mobile-', () => {
    beforeEach(() => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.filter-button').click();
        cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(6).click();
    });
  
    it('Verify that kotlin with swift display 4 companies', () => {
        cy.get('.filter-option').get('[for="Kotlin"]').click()
        cy.get('.filter-option').get('[for="Swift"]').click()
        cy.get('.card').should('have.length', (4))
  
    })
    it('Verify that kotlin with swift and react native display 4 companies', () => {
        cy.get('.filter-option').get('[for="React Native"]').click()
        cy.get('.filter-option').get('[for="Kotlin"]').click()
        cy.get('.filter-option').get('[for="Swift"]').click()
        cy.get('.card').should('have.length', (4))
    })
    it('Verify that lonic with xamarin and flutter display 11 companies', () => {
        cy.get('.filter-option').get('[for="Ionic"]').click()
        cy.get('.filter-option').get('[for="Xamarin"]').click()
        cy.get('.filter-option').get('[for="Flutter"]').click()
        cy.get('.card').should('have.length', 11)
    })
  })
  