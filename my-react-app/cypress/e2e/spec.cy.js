describe('press show filter button ', () => {
  beforeEach(() => {
    cy.visit('https://stacksinfo.web.app');
  })

  let numOfCompanies = 20
  it('check if all companies appears immediately', () => { 
    cy.get('.card').should('have.length', numOfCompanies)
  }) 

  it(' check if the button text will change', () => { 
    cy.get('.filter-button').should('contain','Show Filters')
    cy.get('.filter-button').click()
    cy.get('.filter-button').should('contain','Hide Filters')
  }) 
  
  // it('c++ checked', () => { 
  //   cy.get('.filter-button').click()
  //   cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(0).click();
  //   cy.get('.filter-option').eq(0).get('[for="C++"]').click()
  //   cy.get('.card').should('have.length', (2))
  // })
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
  

describe('Verify that selecting combinations of technologies display right companies number -testing with OR logic for backend-', () => {
  beforeEach(() => {
      cy.visit('https://stacksinfo.web.app');
      cy.get('.filter-button').click();
      cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(0).click();
  });

  it('Verify that C++ with ASP.NET Core display 2 companies', () => { 
      cy.get('.filter-option').eq(1).get('[for="ASP .NET Core"]').click()
      cy.get('.filter-option').eq(0).get('[for="C++"]').click()

      cy.get('.card').should('have.length', (2))

      cy.get('.filter-option').eq(0).get('.PrivateSwitchBase-input').should('have.attr', 'data-indeterminate', 'true');
      cy.get('.filter-option').eq(1).get('.PrivateSwitchBase-input').should('have.attr', 'data-indeterminate', 'true');
  })
  it('Verify that C++ with Django with Flask display 5 companies', () => { 
      cy.get('.filter-option').get('[for="Flask"]').click()
      cy.get('.filter-option').get('[for="C++"]').click()
      cy.get('.filter-option').get('[for="Django"]').click() 
      cy.get('.card').should('have.length', 5)
  })
  it('Verify that Node.js with Laravel display 10 companies', () => {
      cy.get('.filter-option').get('[for="Node.js"]').click() 
      cy.get('.filter-option').get('[for="Laravel"]').click() 
      cy.get('.card').should('have.length', 10)
  })
  it('Verify that Node.js with Laravel with Ruby on Rails display 10 companies', () => {
      cy.get('.filter-option').get('[for="Node.js"]').click() 
      cy.get('.filter-option').get('[for="Ruby on Rails"]').click()
      cy.get('.filter-option').get('[for="Laravel"]').click() 

      cy.get('.card').should('have.length', 10)
  })
  it('Verify that C++ with NestJS display 2 companies', () => {
      cy.get('.filter-option').get('[for="C++"]').click()
      cy.get('.filter-option').get('[for="NestJS"]').click()

      cy.get('.card').should('have.length', 2)
  })
  it('Verify that C++ with NestJS display 2 companies', () => {
    cy.get('.filter-option').get('[for="Spring Boot"]').click()
    cy.get('.filter-option').get('[for="C++"]').click()
    cy.get('.filter-option').get('[for="NestJS"]').click()

    cy.get('.card').should('have.length', 2)
})
})



// describe('press backend then c++', () => {
//   it('c++ checked', () => {
//     cy.visit('https://stacksinfo.web.app')
//     cy.get('.filter-button').click()
//     cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(0).click();
//     cy.get('.filter-option').eq(0).get('[for="C++"]').click()
//     cy.get('.filter-option').eq(0).get('.PrivateSwitchBase-input').should('have.attr', 'data-indeterminate', 'true');
//   //ضل نتاكد انو ال
//   //result length=2 (the companies that provide c++ is 2)  
//   })
// })


// describe('press backend then c++ test to modify', () => {
//   it('c++ checked', () => {
//     cy.visit('https://stacksinfo.web.app')
//     cy.get('.filter-button').click()
//     cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(0).click();
//     cy.get('.filter-option').eq(0).get('[for="C++"]').click()
//     cy.get('.filter-option').eq(0).get('.PrivateSwitchBase-input').should('have.attr', 'data-indeterminate', 'true');
//     // Assuming your application sends a response, you can intercept the response using cy.i
//   })
// })




 // cy.intercept('POST', '/searchAndFilter').as('getResponse');
