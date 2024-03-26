describe("General tests ", () => {
  beforeEach(() => {
    cy.visit("https://stacksinfo.web.app");
    cy.get(".filter-button").click();
  }); 
  //Displaying stacks options based on thier titles  
  describe("Verify that clicking on each filter title displays its options.", () => {
    let numOfStacks = 9;

    beforeEach(() => {
      cy.get(".options-list").should("not.exist");
    }); 
    it("Verify that clicking on each filter title displays its options even if another title is already clicked", () => {
      let numOfStacks = 9;
      cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').should(
        "have.length",
        numOfStacks
      );
      cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').each(
        ($stackElement, index, $stackElements) => {
          cy.get($stackElement).click();
          cy.get(".options-list").should("have.length", index + 1);
        }
      );
    }); 
    for (let index = 0; index < numOfStacks; index++) {
      it(`Verify that clicking on filter number ${
        index + 1
      } displays its options`, () => {
        cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]')
          .eq(index)
          .click();
        cy.get(".options-list").should("exist");
      });
    }
  }); 
}); 

describe('press show filter button ', () => { 
    let numOfCompanies = 20
    beforeEach(() => {
        cy.visit('https://stacksinfo.web.app');
    })
    it('TC-filter-1->9 - Check if all companies appear immediately when loading the page', () => { 
        cy.get('.card').should('have.length', numOfCompanies)
    })
    it('TC-filter-10 - Verify that the text of "Show Filters" button will change to "Hide Filters" when clicking it', () => { 
        cy.get('.filter-button').should('contain','Show Filters')
        cy.get('.filter-button').click()
        cy.get('.filter-button').should('contain','Hide Filters')
      })  
})

describe('Verify that filters work correctly when selecting single stack', () => {
    beforeEach(() => {
      cy.visit('https://stacksinfo.web.app');
      cy.get('.filter-button').click() 
    })
    describe('Verify that filters work correctly when selecting single Backend stack', () => { 
        beforeEach(() => { 
            cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(0).click();
        })
        it('TC-filter-11 - Verify that C++ filter work correctly', () => { 
        cy.get('.filter-option').get('[for="C++"]').click()
        cy.get('.card').should('have.length', 2)
        })
        it('TC-filter-12 - Verify that Spring Boot filter work correctly', () => { 
        cy.get('.filter-option').get('[for="Spring Boot"]').click()
        cy.get('.card').should('have.length', 0)
        })
    })

    describe('Verify that filters work correctly when selecting single DBA stack', () => {
        beforeEach(() => { 
          cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(1).click(); 
        })
        it('TC-filter-13 - Verify that Oracle Database filter work correctly', () => { 
            cy.get('.filter-option').get('[for="Oracle Database"]').click()
            cy.get('.card').should('have.length', 3)
        })   
      })
  })


