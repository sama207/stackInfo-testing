describe('Testing AND Logic', () => {
    beforeEach(() => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.filter-button').click();
        cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(0).click();
    });

    // it('Verify that c++ with mySQL display no companies', () => {
    //     cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(1).click(); 
    //     cy.get('.filter-option').get('[for="C++"]').click()
    //     cy.get('.filter-option').get('[for="MySQL"]').click()
    //     cy.get('.card').should('have.length', (0))
    // })
    // it('Verify that after unchecked c++ and mySQL still checked display 2 companies', () => { 
    //     cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(1).click();
    //     cy.get('.filter-option').get('[for="MySQL"]').click()
    //     cy.get('.filter-option').get('[for="C++"]').click()
    //     cy.get('.filter-option').get('[for="C++"]').then(($cpp) => {
    //         cy.wrap($cpp).click()
    //         cy.get('.card').should('have.length', (2))
    //      })
    // })
    // it('Verify that Django with Ansible display no companies', () => { 
    //     cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(2).click();
    //     cy.get('.filter-option').get('[for="Django"]').click()
    //     cy.get('.filter-option').get('[for="Ansible"]').click()
    //     cy.get('.card').should('have.length', (2))
    // })
    // it('Verify that Laravel with React display no companies', () => {
    //     cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(3).click();
    //     cy.get('.filter-option').get('[for="Laravel"]').click()
    //     cy.get('.filter-option').get('[for="React"]').click()
    //     cy.get('.card').should('have.length', (3))
    // })
    // it('Verify that after unchecked react and Laravel still checked display 6 companiess', () => {
    //     cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(3).click();
    //     cy.get('.filter-option').get('[for="React"]').click()
    //     cy.get('.filter-option').get('[for="Laravel"]').click()
    //     cy.get('.filter-option').get('[for="React"]').then(($cpp) => {
    //         cy.wrap($cpp).click()
    //         cy.get('.card').should('have.length', (6))
    //     })
    // })
})