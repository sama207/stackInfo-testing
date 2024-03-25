describe('Verify that each stack checkbox filter companies based technologies it contains', () => {
    beforeEach(() => {
      cy.visit('https://stacksinfo.web.app');
      cy.get('.filter-button').click();
    }) 
    it('Display DevOps companies', () => {   
      cy.get('.PrivateSwitchBase-input').eq(3).click();
      cy.get('.card').should('exist') 
    })

    it('Display Backend companies', () => {   
        cy.get('.PrivateSwitchBase-input').eq(0).click();
        cy.get('.card').should('exist') 
      })
  }) 

  