describe("Verify that selecting options from different stacks will work correctly, applying AND logic, and display the correct number of companies", () => {
  beforeEach(() => {
    cy.visit("https://stacksinfo.web.app");
    cy.get(".filter-button").click();
    //This will display only the options list for stacks that have at least one company.
    cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]').each(
      ($tech, index) => {
        if (![2, 5, 7, 8].includes(index)) {
          cy.get($tech).click();
        }
      }
    );
  }); 
  it("Verify that Spring Boot(backend) and Cassandra(DBA) display a company", () => {
    cy.get(".filter-option").get('[for="Spring Boot"]').click();
    cy.get(".filter-option").get('[for="Cassandra"]').click();
    cy.get(".card").should("have.length", 1);
  });
  it("Verify that Node.js(backend) and AWS(DevOps) display 3 companies", () => {
    cy.get(".filter-option").get('[for="Node.js"]').click();
    cy.get(".filter-option").get('[for="AWS"]').click();
    cy.get(".card").should("have.length", 3);
  });
  it("Verify that Node.js(backend) and AWS(DevOps) and React(frontend) display 3 companies", () => {
    cy.get(".filter-option").get('[for="Node.js"]').click();
    cy.get(".filter-option").get('[for="AWS"]').click();
    cy.get(".filter-option").get('[for="React"]').click();
    cy.get(".card").should("have.length", 3);
  });
  it("Verify that Django(backend) and MySQL(DBA) and Xamarin(mobile) display a company", () => {
    cy.get(".filter-option").get('[for="Django"]').click();
    cy.get(".filter-option").get('[for="MySQL"]').click();
    cy.get(".filter-option").get('[for="Xamarin"]').click();
    cy.get(".card").should("have.length", 1);
  });
  it("Verify that MySQL(DBA) and Xamarin(mobile)  display a company", () => {
    cy.get(".filter-option").get('[for="MySQL"]').click();
    cy.get(".filter-option").get('[for="Xamarin"]').click();
    cy.get(".card").should("have.length", 1);
  });
  it("Verify that MySQL(DBA) and Xamarin(mobile) and React Native(mobile) display a company", () => {
    cy.get(".filter-option").get('[for="MySQL"]').click();
    cy.get(".filter-option").get('[for="Xamarin"]').click();
    cy.get(".filter-option").get('[for="React Native"]').click();
    cy.get(".card").should("have.length", 1);
  });
  it("Verify that Spring Boot(backend) and MongoDB(DBA)  display a company", () => {
    cy.get(".filter-option").get('[for="MongoDB"]').click();
    cy.get(".filter-option").get('[for="Spring Boot"]').click();
    cy.get(".card").should("have.length", 1);
  });
  it("Verify that Spring Boot(backend) and MongoDB(DBA) and Angular(frontend) display a company", () => {
    cy.get(".filter-option").get('[for="MongoDB"]').click();
    cy.get(".filter-option").get('[for="Spring Boot"]').click();
    cy.get(".filter-option").get('[for="Angular"]').click();
    cy.get(".card").should("have.length", 1);
  });
  it("Verify that MongoDB(DBA) and Angular(frontend) display a company", () => {
    cy.get(".filter-option").get('[for="MongoDB"]').click();
    cy.get(".filter-option").get('[for="Angular"]').click();
    cy.get(".card").should("have.length", 1);
  }); 
  it("Verify that after unchecked react and Laravel still checked display 6 companiess", () => {
    cy.get(".filter-option").get('[for="React"]').click();
    cy.get(".filter-option").get('[for="Laravel"]').click();
    cy.get(".filter-option")
      .get('[for="React"]')
      .then(($cpp) => {
        cy.wrap($cpp).click();
        cy.get(".card").should("have.length", 6);
      });
  });
  it("Verify that Laravel and React display no companies", () => {
    cy.get(".filter-option").get('[for="Laravel"]').click();
    cy.get(".filter-option").get('[for="React"]').click();
    cy.get(".card").should("have.length", 3);
  });
  it("Verify that Django and Ansible display no companies", () => {
    cy.get(".filter-option").get('[for="Django"]').click();
    cy.get(".filter-option").get('[for="Ansible"]').click();
    cy.get(".card").should("have.length", 2);
  });
  it("Verify that after unchecked c++ and mySQL still checked display 2 companies", () => {
    cy.get(".filter-option").get('[for="MySQL"]').click();
    cy.get(".filter-option").get('[for="C++"]').click();
    cy.get(".filter-option")
      .get('[for="C++"]')
      .then(($cpp) => {
        cy.wrap($cpp).click();
        cy.get(".card").should("have.length", 2);
      });
  });
  it("Verify that c++ and mySQL display no companies", () => {
    cy.get(".filter-option").get('[for="C++"]').click();
    cy.get(".filter-option").get('[for="MySQL"]').click();
    cy.get(".card").should("have.length", 0);
  });
});
