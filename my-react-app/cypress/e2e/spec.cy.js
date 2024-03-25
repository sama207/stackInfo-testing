// describe('filter button ', () => {
//   it(' check if the button text changes when clicked', () => {
//     cy.visit('https://stacksinfo.web.app')
//     cy.get('.filter-button').should('contain', 'Show Filters')
//     cy.get('.filter-button').click()
//     cy.get('.filter-button').should('contain', 'Hide Filters')
//   })
// })
describe('press backend then c++', () => {
  it('c++ checked', () => {
    cy.visit('https://stacksinfo.web.app')
    cy.get('.filter-button').click()
    cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(0).click();
    cy.get('.filter-option').eq(0).get('[for="C++"]').click()
    cy.intercept('POST', '/searchAndFilter').as('getResponse');

    cy.get('.filter-option').eq(0).get('.PrivateSwitchBase-input').should('have.attr', 'data-indeterminate', 'true');
    // Assuming your application sends a response, you can intercept the response using cy.intercept

    // Wait for the response to be received
    cy.wait('@getResponse').then((interception) => {
      // Access the response body and assert on the array length
      const responseData = interception.response.body;
      expect(responseData.results.length).to.be.equal(2); // Adjust this assertion as needed
    });
  })
})
// describe('press backend -> c++ ->ASP.NET Core ', () => {
//   it('c++ & ASP.NET Core checked', () => {
//     cy.visit('https://stacksinfo.web.app')
//     cy.intercept('POST', '/searchAndFilter').as('getResponse');

//     cy.get('.filter-button').click()
//     cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(0).click();
//     cy.get('.filter-option').eq(0).get('[for="C++"]').click()
//     cy.get('.filter-option').eq(0).get('.PrivateSwitchBase-input').should('have.attr', 'data-indeterminate', 'true');
//     cy.get('.filter-option').eq(1).get('[for="ASP .NET Core"]').click()
//     cy.get('.filter-option').eq(1).get('.PrivateSwitchBase-input').should('have.attr', 'data-indeterminate', 'true');
//     // Wait for the response to be received
//     cy.wait('@getResponse').then((interception) => {
//       // Access the response body and assert on the array length
//       const responseData = interception.response.body;
//       expect(responseData.results.length).to.be.greaterThan(1); // Adjust this assertion as needed
//     });
//   })
// })
// describe('press backend btn', () => {
//   it('display all companies or businesses that use alteast one backend stack', () => {
//     cy.visit('https://stacksinfo.web.app')
//     cy.intercept('POST', '/searchAndFilter').as('getResponse');
//     cy.get('.filter-button').click()
//     cy.get('.dropdown-title').eq(0).get('.PrivateSwitchBase-input').eq(0).click()
//     cy.wait('@getResponse').then((interception) => {
//       // Access the response body and assert on the array length
//       const responseData = interception.response.body;
//       cy.wrap(responseData.results.length)
//       .to.be.notequal(null)
//     });
//   })
// })