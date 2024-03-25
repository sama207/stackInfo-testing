describe('Verify that selecting combinations of same technologies display right companies number -testing with OR logic for DBA-', () => {
    beforeEach(() => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.filter-button').click();
        cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(1).click();
    }); 

    it('Verify that MySQL with PostgreSQL Core display 4 companies', () => { 
        cy.get('.filter-option').eq(1).get('[for="ASP .NET Core"]').click()
        cy.get('.filter-option').eq(0).get('[for="C++"]').click()
  
        cy.get('.card').should('have.length', (2))
  
        cy.get('.filter-option').eq(0).get('.PrivateSwitchBase-input').should('have.attr', 'data-indeterminate', 'true');
        cy.get('.filter-option').eq(1).get('.PrivateSwitchBase-input').should('have.attr', 'data-indeterminate', 'true');
    })

})
   