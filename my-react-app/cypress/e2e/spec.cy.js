// describe('press show filter button ', () => {
//   beforeEach(() => {
//     cy.visit('https://stacksinfo.web.app');
//   })

  // let numOfCompanies = 20
  // it('check if all companies appears immediately', () => { 
  //   cy.get('.card').should('have.length', numOfCompanies)
  // })  

  // it(' check if the button text will change', () => { 
  //   cy.get('.filter-button').should('contain','Show Filters')
  //   cy.get('.filter-button').click()
  //   cy.get('.filter-button').should('contain','Hide Filters')
  // }) 
  
// }) 

// describe("Testing AND Logic", () => {
//   beforeEach(() => {
//     cy.visit("https://stacksinfo.web.app");
//     cy.get(".filter-button").click(); 
//     cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').each(($tech, index)=>{
//         if (!([2, 5, 7, 8].includes(index))) {
//             cy.get($tech).click(); 
//         }
//     })
//   });
//   it("Verify that Spring Boot(backend) and Cassandra(DBA) display a company", () => {
//     cy.get(".filter-option").get('[for="Spring Boot"]').click();
//     cy.get(".filter-option").get('[for="Cassandra"]').click();
//     cy.get(".card").should("have.length", 1);
//   });
//   it("Verify that Node.js(backend) and AWS(DevOps) display 3 companies", () => {
//     cy.get(".filter-option").get('[for="Node.js"]').click();
//     cy.get(".filter-option").get('[for="AWS"]').click();
//     cy.get(".card").should("have.length", 3);
//   }); 
//   it("Verify that Node.js(backend) and AWS(DevOps) and React(frontend) display 3 companies", () => {
//     cy.get(".filter-option").get('[for="Node.js"]').click();
//     cy.get(".filter-option").get('[for="AWS"]').click();
//     cy.get(".filter-option").get('[for="React"]').click();
//     cy.get(".card").should("have.length", 3);
//   });
//   it("Verify that Django(backend) and MySQL(DBA) and Xamarin(mobile) display a company", () => {
//     cy.get(".filter-option").get('[for="Django"]').click();
//     cy.get(".filter-option").get('[for="MySQL"]').click();
//     cy.get(".filter-option").get('[for="Xamarin"]').click();
//     cy.get(".card").should("have.length", 1);
//   }); 
//   it("Verify that MySQL(DBA) and Xamarin(mobile)  display a company", () => {
//     cy.get(".filter-option").get('[for="MySQL"]').click();
//     cy.get(".filter-option").get('[for="Xamarin"]').click();
//     cy.get(".card").should("have.length", 1);
//   });
//   it("Verify that MySQL(DBA) and Xamarin(mobile) and React Native(mobile) display a company", () => {
//     cy.get(".filter-option").get('[for="MySQL"]').click();
//     cy.get(".filter-option").get('[for="Xamarin"]').click();
//     cy.get(".filter-option").get('[for="React Native"]').click();
//     cy.get(".card").should("have.length", 1);
//   }); 
//   it("Verify that Spring Boot(backend) and MongoDB(DBA)  display a company", () => {
//     cy.get(".filter-option").get('[for="MongoDB"]').click();
//     cy.get(".filter-option").get('[for="Spring Boot"]').click();
//     cy.get(".card").should("have.length", 1);
//   });  
//   it("Verify that Spring Boot(backend) and MongoDB(DBA) and Angular(frontend) display a company", () => {
//     cy.get(".filter-option").get('[for="MongoDB"]').click();
//     cy.get(".filter-option").get('[for="Spring Boot"]').click();
//     cy.get(".filter-option").get('[for="Angular"]').click();
//     cy.get(".card").should("have.length", 1);
//   });  
//   it("Verify that MongoDB(DBA) and Angular(frontend) display a company", () => {
//     cy.get(".filter-option").get('[for="MongoDB"]').click(); 
//     cy.get(".filter-option").get('[for="Angular"]').click();
//     cy.get(".card").should("have.length", 1);
//   }); 
// });
 

// describe('Verify that filters work correctly when selecting single Backend stack', () => {
//   beforeEach(() => {
//     cy.visit('https://stacksinfo.web.app');
//     cy.get('.filter-button').click()
//     cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(0).click();
//   })
//   it('Verify that C++ filter work correctly', () => { 
//     cy.get('.filter-option').get('[for="C++"]').click()
//     cy.get('.card').should('have.length', 2)
//   })
//   it('Verify that Spring Boot filter work correctly', () => { 
//     cy.get('.filter-option').get('[for="Spring Boot"]').click()
//     cy.get('.card').should('have.length', 4)
//   })
// })
// describe('Verify that filters work correctly when selecting single DBA stack', () => {
//   beforeEach(() => {
//     cy.visit('https://stacksinfo.web.app');
//     cy.get('.filter-button').click()
//     cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(1).click(); 
//   })
//   it('Verify that Oracle Database filter work correctly', () => { 
//       cy.get('.filter-option').get('[for="Oracle Database"]').click()
//       cy.get('.card').should('have.length', 3)
//   })   
// })
 

// describe('Verify that each stack', () => {
//   beforeEach(() => {
//     cy.visit('https://stacksinfo.web.app');
//     cy.get('.filter-button').click();
//     cy.get('.options-list').should('not.exist')
//   })
//   let numOfStacks = 9;

//   for (let index = 0;  index < numOfStacks; index++) {
//     it(`display stack number ${index + 1} options`, () => {  
//       cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(index).click();
//       cy.get('.options-list').should('exist')
//     })
//   }
// })
  

// describe('Verify that selecting combinations of technologies display right companies number -testing with OR logic for backend-', () => {
//   beforeEach(() => {
//       cy.visit('https://stacksinfo.web.app');
//       cy.get('.filter-button').click();
//       cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(0).click();
//   });

//   it('Verify that +C+ with ASP.NET Core display 2 companies', () => { 
//       cy.get('.filter-option').get('[for="ASP .NET Core"]').click()
//       cy.get('.filter-option').get('[for="C++"]').click() 
//       cy.get('.card').should('have.length', (2)) 
//     })
//   it('Verify that C++ with Django with Flask display 5 companies', () => { 
//       cy.get('.filter-option').get('[for="Flask"]').click()
//       cy.get('.filter-option').get('[for="C++"]').click()
//       cy.get('.filter-option').get('[for="Django"]').click() 
//       cy.get('.card').should('have.length', 5)
//   })
//   it('Verify that Node.js with Laravel display 10 companies', () => {
//       cy.get('.filter-option').get('[for="Node.js"]').click() 
//       cy.get('.filter-option').get('[for="Laravel"]').click() 
//       cy.get('.card').should('have.length', 10)
//   })
//   it('Verify that Node.js with Laravel with Ruby on Rails display 10 companies', () => {
//       cy.get('.filter-option').get('[for="Node.js"]').click() 
//       cy.get('.filter-option').get('[for="Ruby on Rails"]').click()
//       cy.get('.filter-option').get('[for="Laravel"]').click() 

//       cy.get('.card').should('have.length', 10)
//   })
//   it('Verify that C++ with NestJS display 2 companies', () => {
//       cy.get('.filter-option').get('[for="C++"]').click()
//       cy.get('.filter-option').get('[for="NestJS"]').click()

//       cy.get('.card').should('have.length', 2)
//   })
//   it('Verify that C++ with NestJS display 2 companies', () => {
//     cy.get('.filter-option').get('[for="Spring Boot"]').click()
//     cy.get('.filter-option').get('[for="C++"]').click()
//     cy.get('.filter-option').get('[for="NestJS"]').click()

//     cy.get('.card').should('have.length', 2)
// })
// })

// describe('Verify that selecting combinations of same technologies display right companies number -testing with OR logic for DBA-', () => {
//   beforeEach(() => {
//       cy.visit('https://stacksinfo.web.app');
//       cy.get('.filter-button').click();
//       cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(1).click();
//   }); 
//   it('Verify that MySQL with PostgreSQL display 5 companies', () => { 
//       cy.get('.filter-option').get('[for="MySQL"]').click()
//       cy.get('.filter-option').get('[for="PostgreSQL"]').click()
//       cy.get('.card').should('have.length', 5)
//   })
//   it('Verify that MySQL with PostgreSQL with Microsoft SQL Server display 5 companies', () => { 
//     cy.get('.filter-option').get('[for="Microsoft SQL Server"]').click()       
//     cy.get('.filter-option').get('[for="MySQL"]').click()
//     cy.get('.filter-option').get('[for="PostgreSQL"]').click()
 
//     cy.get('.card').should('have.length', 5)
//   })
//   it('Verify that MySQL with PostgreSQL with Oracle Database display 5 companies', () => { 
//     cy.get('.filter-option').get('[for="Oracle Database"]').click()       
//     cy.get('.filter-option').get('[for="MySQL"]').click()
//     cy.get('.filter-option').get('[for="PostgreSQL"]').click()

//     cy.get('.card').should('have.length', 5)
//   })
//   it('Verify that MySQL with PostgreSQL with MongoDB display 6 companies', () => { 
//     cy.get('.filter-option').get('[for="MongoDB"]').click()       
//     cy.get('.filter-option').get('[for="MySQL"]').click()
//     cy.get('.filter-option').get('[for="PostgreSQL"]').click()
 
//     // describe('press backend then c++', () => {
// //   it('c++ checked', () => {
// //     cy.visit('https://stacksinfo.web.app')
// //     cy.get('.filter-button').click()
// //     cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(0).click();
// //     cy.get('.filter-option').eq(0).get('[for="C++"]').click()
// //     cy.get('.filter-option').eq(0).get('.PrivateSwitchBase-input').should('have.attr', 'data-indeterminate', 'true');
// //   //ضل نتاكد انو ال
// //   //result length=2 (the companies that provide c++ is 2)  
// //   })
// // })

//     cy.get('.card').should('have.length', 6)
//   })
//   it('Verify that MySQL with PostgreSQL with Redis display 1 company', () => { 
//     cy.get('.filter-option').get('[for="Redis"]').click()  
//     cy.get('.filter-option').get('[for="PostgreSQL"]').click()

 
//     cy.get('.card').should('have.length', 1)
//   })
//   it("Verify that MySQL with PostgreSQL with Couchbase display 1 company", () => {
//     cy.get(".filter-option").get('[for="PostgreSQL"]').click();
//     cy.get(".filter-option").get('[for="Couchbase"]').click();
 

//     // describe('press backend then c++ test to modify', () => {
// //   it('c++ checked', () => {
// //     cy.visit('https://stacksinfo.web.app')
// //     cy.get('.filter-button').should('contain', 'Show Filters')
// //     cy.get('.filter-button').click()
// //     cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(0).click();
// //     cy.get('.filter-option').eq(0).get('[for="C++"]').click()
// //     cy.get('.filter-option').eq(0).get('.PrivateSwitchBase-input').should('have.attr', 'data-indeterminate', 'true');
// //     // Assuming your application sends a response, you can intercept the response using cy.i
// //   })
// // })

//     cy.get(".card").should("have.length", 1);
//   });
//   it("Verify that MySQL with PostgreSQL with Couchbase with MongoDB display 2 companies", () => {
//     cy.get(".filter-option").get('[for="PostgreSQL"]').click();
//     cy.get(".filter-option").get('[for="MongoDB"]').click();
//     cy.get(".filter-option").get('[for="Couchbase"]').click();

//     cy.get(".card").should("have.length", 2);
//   });
//   it("Verify that MySQL with PostgreSQL with Oracle Database with MongoDB display 2 companies", () => {
//     cy.get(".filter-option").get('[for="PostgreSQL"]').click();
//     cy.get(".filter-option").get('[for="Oracle Database"]').click();
//     cy.get(".filter-option").get('[for="MongoDB"]').click();

//     cy.get(".card").should("have.length", 2);
//   });
//   it("Verify that MySQL with PostgreSQL with Microsoft SQL Server with MongoDB display 2 companies", () => {
//     cy.get(".filter-option").get('[for="PostgreSQL"]').click();
//     cy.get(".filter-option").get('[for="Microsoft SQL Server"]').click();
//     cy.get(".filter-option").get('[for="MongoDB"]').click();

//     cy.get(".card").should("have.length", 2);
//   });

// })
 
// describe("Verify that selecting combinations of same technologies display right companies number -testing with OR logic for Data Analytics-", () => {
//   beforeEach(() => {
//     cy.visit("https://stacksinfo.web.app");
//     cy.get(".filter-button").click();
//     cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(2).click();
//   }); 
//   it("Verify that Python with MySQL does not display any company", () => {
//     cy.get(".filter-option").get('[for="Python"]').click();
//     cy.get(".filter-option").get('[for="MySQL"]').click(); 

//     cy.get(".card").should("have.length", 0);
//   });
//   it("Verify that Python with Excel does not display any company", () => {
//     cy.get(".filter-option").get('[for="Python"]').click();
//     cy.get(".filter-option").get('[for="Excel"]').click(); 

//     cy.get(".card").should("have.length", 0);
//   });
//   it("Verify that Power BI with Tableau does not display any company", () => {
//     cy.get(".filter-option").get('[for="Tableau"]').click();
//     cy.get(".filter-option").get('[for="Power BI"]').click(); 

//     cy.get(".card").should("have.length", 0);
//   });
//   it("Verify that Power BI with Qlik does not display any company", () => {
//     cy.get(".filter-option").get('[for="Qlik"]').click();
//     cy.get(".filter-option").get('[for="Power BI"]').click(); 

//     cy.get(".card").should("have.length", 0);
//   });

// });

// describe("Verify that selecting combinations of same technologies display right companies number -testing with OR logic for ML-DL-", () => {
//   beforeEach(() => {
//     cy.visit("https://stacksinfo.web.app");
//     cy.get(".filter-button").click();
//     cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').eq(5).click();
//   });

//   it("Verify that TensorFlow with PyTorch does not display any company", () => {
//     cy.get(".filter-option").get('[for="TensorFlow"]').click();
//     cy.get(".filter-option").get('[for="PyTorch"]').click(); 

//     cy.get(".card").should("have.length", 0);
//   });
//   it("Verify that Scikit-learn with PyTorch does not display any company", () => {
//     cy.get(".filter-option").get('[for="Scikit-learn"]').click();
//     cy.get(".filter-option").get('[for="PyTorch"]').click(); 

//     cy.get(".card").should("have.length", 0);
//   });
//   it("Verify that LangChain with MxNet does not display any company", () => {
//     cy.get(".filter-option").get('[for="LangChain"]').click();
//     cy.get(".filter-option").get('[for="MxNet"]').click();
//     cy.get(".card").should("have.length", 0);
//   });

// });
 
 
 
 // cy.intercept('POST', '/searchAndFilter').as('getResponse');
