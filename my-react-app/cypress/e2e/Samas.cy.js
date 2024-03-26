describe("Testing AND Logic", () => {
  beforeEach(() => {
    cy.visit("https://stacksinfo.web.app");
    cy.get(".filter-button").click(); 
    cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').each(($tech, index)=>{
        if (!([2, 5, 7, 8].includes(index))) {
            cy.get($tech).click();

        }
    })
  });

});
 