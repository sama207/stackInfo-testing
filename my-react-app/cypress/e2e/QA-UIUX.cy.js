//Moved

describe('Verify that selecting combinations of technologies do not display any companies -testing with OR logic for QA-', () => {
    beforeEach(() => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.filter-button').click();
        cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(7).click();
    }); 

    it('Verify that celenium with cypress display no companies', () => { 
        cy.get('.filter-option').get('[for="Selenium"]').click()
        cy.get('.filter-option').get('[for="Cypress"]').click()
  
        cy.get('.card').should('have.length', (0))
    })
    it('Verify that SoapUI with postman display no companies', () => { 
        cy.get('.filter-option').get('[for="SoapUI"]').click()
        cy.get('.filter-option').get('[for="Postman"]').click()
  
        cy.get('.card').should('have.length', (0))
    })
    it('Verify that appium with postman display no companies', () => { 
        cy.get('.filter-option').get('[for="Appium"]').click()
        cy.get('.filter-option').get('[for="Postman"]').click()
  
        cy.get('.card').should('have.length', (0))
    })
})
   
describe('Verify that selecting combinations of technologies do not display any companies -testing with OR logic for UIUX-', () => {
    beforeEach(() => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.filter-button').click();
        cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(8).click();
    }); 

    it('Verify that figma with sketch display no companies', () => { 
        cy.get('.filter-option').get('[for="Figma"]').click()
        cy.get('.filter-option').get('[for="Sketch"]').click()
  
        cy.get('.card').should('have.length', (0))
    })
    it('Verify that Adobe XD with InVision display no companies', () => { 
        cy.get('.filter-option').get('[for="Adobe XD"]').click()
        cy.get('.filter-option').get('[for="InVision"]').click()
  
        cy.get('.card').should('have.length', (0))
    })
    it('Verify that Zeplin with Figma display no companies', () => { 
        cy.get('.filter-option').get('[for="Zeplin"]').click()
        cy.get('.filter-option').get('[for="Figma"]').click()
  
        cy.get('.card').should('have.length', (0))
    })
})
   