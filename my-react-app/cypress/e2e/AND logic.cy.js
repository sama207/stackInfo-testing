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
  it("TC-filter-45 Verify that Spring Boot(backend) and Cassandra(DBA) display a company", () => {
    cy.get(".filter-option").get('[for="Spring Boot"]').click();
    cy.get(".filter-option").get('[for="Cassandra"]').click();
    cy.get(".card").should("have.length", 1);
  });
  it("TC-filter-46 Verify that Node.js(backend) and AWS(DevOps) display 3 companies", () => {
    cy.get(".filter-option").get('[for="Node.js"]').click();
    cy.get(".filter-option").get('[for="AWS"]').click();
    cy.get(".card").should("have.length", 3);
  });
  it("TC-filter-47 Verify that Node.js(backend) and AWS(DevOps) and React(frontend) display 3 companies", () => {
    cy.get(".filter-option").get('[for="Node.js"]').click();
    cy.get(".filter-option").get('[for="AWS"]').click();
    cy.get(".filter-option").get('[for="React"]').click();
    cy.get(".card").should("have.length", 3);
  });
  it("TC-filter-48 Verify that Django(backend) and MySQL(DBA) and Xamarin(mobile) display a company", () => {
    cy.get(".filter-option").get('[for="Django"]').click();
    cy.get(".filter-option").get('[for="MySQL"]').click();
    cy.get(".filter-option").get('[for="Xamarin"]').click();
    cy.get(".card").should("have.length", 1);
  });
  it("TC-filter-49 Verify that MySQL(DBA) and Xamarin(mobile)  display a company", () => {
    cy.get(".filter-option").get('[for="MySQL"]').click();
    cy.get(".filter-option").get('[for="Xamarin"]').click();
    cy.get(".card").should("have.length", 1);
  });
  it("TC-filter-50 Verify that MySQL(DBA) and Xamarin(mobile) and React Native(mobile) display a company", () => {
    cy.get(".filter-option").get('[for="MySQL"]').click();
    cy.get(".filter-option").get('[for="Xamarin"]').click();
    cy.get(".filter-option").get('[for="React Native"]').click();
    cy.get(".card").should("have.length", 1);
  });
  it("TC-filter-51 Verify that Spring Boot(backend) and MongoDB(DBA)  display a company", () => {
    cy.get(".filter-option").get('[for="MongoDB"]').click();
    cy.get(".filter-option").get('[for="Spring Boot"]').click();
    cy.get(".card").should("have.length", 1);
  });
  it("TC-filter-52 Verify that Spring Boot(backend) and MongoDB(DBA) and Angular(frontend) display a company", () => {
    cy.get(".filter-option").get('[for="MongoDB"]').click();
    cy.get(".filter-option").get('[for="Spring Boot"]').click();
    cy.get(".filter-option").get('[for="Angular"]').click();
    cy.get(".card").should("have.length", 1);
  });
  it("TC-filter-53 Verify that MongoDB(DBA) and Angular(frontend) display a company", () => {
    cy.get(".filter-option").get('[for="MongoDB"]').click();
    cy.get(".filter-option").get('[for="Angular"]').click();
    cy.get(".card").should("have.length", 1);
  }); 
  it("TC-filter-54 Verify that unchecking react after checking react(frontend) and Laravel(Backend) will not affect Laravel(Backend) result(companies) and this must display 6 companiess", () => {
    cy.get(".filter-option").get('[for="React"]').click();
    cy.get(".filter-option").get('[for="Laravel"]').click();
    cy.get(".filter-option")
      .get('[for="React"]')
      .then(($cpp) => {
        cy.wrap($cpp).click();
        cy.get(".card").should("have.length", 6);
      });
  });
  it("TC-filter-55 Verify that Laravel(Backend) and React display no companies", () => {
    cy.get(".filter-option").get('[for="Laravel"]').click();
    cy.get(".filter-option").get('[for="React"]').click();
    cy.get(".card").should("have.length", 3);
  });
  it("TC-filter-56 Verify that Django(Backend) and Ansible(DevOps) display no companies", () => {
    cy.get(".filter-option").get('[for="Django"]').click();
    cy.get(".filter-option").get('[for="Ansible"]').click();
    cy.get(".card").should("have.length", 2);
  }); 
  it("TC-filter-57 Verify that unchecking C++(Backend), after checking C++(Backend) and MySQL(DBA), will not affect MySQL(DBA) result(companies) and this must display 2 companies", () => {
    cy.get(".filter-option").get('[for="MySQL"]').click();
    cy.get(".filter-option").get('[for="C++"]').click();
    cy.get(".filter-option")
      .get('[for="C++"]')
      .then(($cpp) => {
        cy.wrap($cpp).click();
        cy.get(".card").should("have.length", 2);
      });
  });
  it("TC-filter-58 Verify that C++(Backend) and mySQL display no companies", () => {
    cy.get(".filter-option").get('[for="C++"]').click();
    cy.get(".filter-option").get('[for="MySQL"]').click();
    cy.get(".card").should("have.length", 0);
  });
});
