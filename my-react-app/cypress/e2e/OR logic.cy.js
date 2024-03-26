describe("Verify that selecting combinations of technologies do not display any companies -testing with OR logic for QA-", () => {
  beforeEach(() => {
    cy.visit("https://stacksinfo.web.app");
    cy.get(".filter-button").click();
  });
  describe("Verify that selecting combinations of technologies do not display any companies -testing with OR logic for QA-", () => {
    beforeEach(() => { 
      cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]')
        .eq(7)
        .click();
    });

    it("Verify that celenium with cypress display no companies", () => {
      cy.get(".filter-option").get('[for="Selenium"]').click();
      cy.get(".filter-option").get('[for="Cypress"]').click();

      cy.get(".card").should("have.length", 0);
    });
    it("Verify that SoapUI with postman display no companies", () => {
      cy.get(".filter-option").get('[for="SoapUI"]').click();
      cy.get(".filter-option").get('[for="Postman"]').click();

      cy.get(".card").should("have.length", 0);
    });
    it("Verify that appium with postman display no companies", () => {
      cy.get(".filter-option").get('[for="Appium"]').click();
      cy.get(".filter-option").get('[for="Postman"]').click();

      cy.get(".card").should("have.length", 0);
    });
  });
  describe("Verify that selecting combinations of technologies do not display any companies -testing with OR logic for UIUX-", () => {
    beforeEach(() => { 
      cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]')
        .eq(8)
        .click();
    });

    it("Verify that figma with sketch display no companies", () => {
      cy.get(".filter-option").get('[for="Figma"]').click();
      cy.get(".filter-option").get('[for="Sketch"]').click();

      cy.get(".card").should("have.length", 0);
    });
    it("Verify that Adobe XD with InVision display no companies", () => {
      cy.get(".filter-option").get('[for="Adobe XD"]').click();
      cy.get(".filter-option").get('[for="InVision"]').click();

      cy.get(".card").should("have.length", 0);
    });
    it("Verify that Zeplin with Figma display no companies", () => {
      cy.get(".filter-option").get('[for="Zeplin"]').click();
      cy.get(".filter-option").get('[for="Figma"]').click();

      cy.get(".card").should("have.length", 0);
    });
  });
  describe("Verify that selecting combinations of technologies display right companies number -testing with OR logic for frontend-", () => {
    beforeEach(() => {
      cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]')
        .eq(4)
        .click();
    });

    it("Verify that react with next.js display 12 companies", () => {
      cy.get(".filter-option").get('[for="React"]').click();
      cy.get(".filter-option").get('[for="Next.js"]').click();
      cy.get(".card").should("have.length", 12);
    });
    it("Verify that vue.js with nuxt.js display 7 companies", () => {
      cy.get(".filter-option").get('[for="Vue.js"]').click();
      cy.get(".filter-option").get('[for="Nuxt.js"]').click();
      cy.get(".card").should("have.length", 7);
    });
    it("Verify that nuxt.js with solid.js display no companies", () => {
      cy.get(".filter-option").get('[for="Nuxt.js"]').click();
      cy.get(".filter-option").get('[for="Solid.js"]').click();
      cy.get(".card").should("have.length", 0);
    });
  });
  describe("Verify that selecting combinations of technologies display right companies number -testing with OR logic for mobile-", () => {
    beforeEach(() => {
      cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]')
        .eq(6)
        .click();
    });

    it("Verify that kotlin with swift display 4 companies", () => {
      cy.get(".filter-option").get('[for="Kotlin"]').click();
      cy.get(".filter-option").get('[for="Swift"]').click();
      cy.get(".card").should("have.length", 4);
    });
    it("Verify that kotlin with swift and react native display 4 companies", () => {
      cy.get(".filter-option").get('[for="React Native"]').click();
      cy.get(".filter-option").get('[for="Kotlin"]').click();
      cy.get(".filter-option").get('[for="Swift"]').click();
      cy.get(".card").should("have.length", 4);
    });
    it("Verify that lonic with xamarin and flutter display 11 companies", () => {
      cy.get(".filter-option").get('[for="Ionic"]').click();
      cy.get(".filter-option").get('[for="Xamarin"]').click();
      cy.get(".filter-option").get('[for="Flutter"]').click();
      cy.get(".card").should("have.length", 11);
    });
  });
  describe("Verify that selecting combinations of same technologies display right companies number -testing with OR logic for DBA-", () => {
    beforeEach(() => {
      cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]')
        .eq(1)
        .click();
    });
    it("Verify that MySQL with PostgreSQL display 5 companies", () => {
      cy.get(".filter-option").get('[for="MySQL"]').click();
      cy.get(".filter-option").get('[for="PostgreSQL"]').click();
      cy.get(".card").should("have.length", 5);
    });
    it("Verify that MySQL with PostgreSQL with Microsoft SQL Server display 5 companies", () => {
      cy.get(".filter-option").get('[for="Microsoft SQL Server"]').click();
      cy.get(".filter-option").get('[for="MySQL"]').click();
      cy.get(".filter-option").get('[for="PostgreSQL"]').click();

      cy.get(".card").should("have.length", 5);
    });
    it("Verify that MySQL with PostgreSQL with Oracle Database display 5 companies", () => {
      cy.get(".filter-option").get('[for="Oracle Database"]').click();
      cy.get(".filter-option").get('[for="MySQL"]').click();
      cy.get(".filter-option").get('[for="PostgreSQL"]').click();

      cy.get(".card").should("have.length", 5);
    });
    it("Verify that MySQL with PostgreSQL with MongoDB display 6 companies", () => {
      cy.get(".filter-option").get('[for="MongoDB"]').click();
      cy.get(".filter-option").get('[for="MySQL"]').click();
      cy.get(".filter-option").get('[for="PostgreSQL"]').click();

      cy.get(".card").should("have.length", 6);
    });
    it("Verify that MySQL with PostgreSQL with Redis display 1 company", () => {
      cy.get(".filter-option").get('[for="Redis"]').click();
      cy.get(".filter-option").get('[for="PostgreSQL"]').click();

      cy.get(".card").should("have.length", 1);
    });
    it("Verify that MySQL with PostgreSQL with Couchbase display 1 company", () => {
      cy.get(".filter-option").get('[for="PostgreSQL"]').click();
      cy.get(".filter-option").get('[for="Couchbase"]').click();

      cy.get(".card").should("have.length", 1);
    });
    it("Verify that MySQL with PostgreSQL with Couchbase with MongoDB display 2 companies", () => {
      cy.get(".filter-option").get('[for="PostgreSQL"]').click();
      cy.get(".filter-option").get('[for="MongoDB"]').click();
      cy.get(".filter-option").get('[for="Couchbase"]').click();

      cy.get(".card").should("have.length", 2);
    });
    it("Verify that MySQL with PostgreSQL with Oracle Database with MongoDB display 2 companies", () => {
      cy.get(".filter-option").get('[for="PostgreSQL"]').click();
      cy.get(".filter-option").get('[for="Oracle Database"]').click();
      cy.get(".filter-option").get('[for="MongoDB"]').click();

      cy.get(".card").should("have.length", 2);
    });
    it("Verify that MySQL with PostgreSQL with Microsoft SQL Server with MongoDB display 2 companies", () => {
      cy.get(".filter-option").get('[for="PostgreSQL"]').click();
      cy.get(".filter-option").get('[for="Microsoft SQL Server"]').click();
      cy.get(".filter-option").get('[for="MongoDB"]').click();

      cy.get(".card").should("have.length", 2);
    });
  });
  describe("Verify that selecting combinations of same technologies display right companies number -testing with OR logic for Data Analytics-", () => {
    beforeEach(() => {
      cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]')
        .eq(2)
        .click();
    });
    it("Verify that Python with MySQL does not display any company", () => {
      cy.get(".filter-option").get('[for="Python"]').click();
      cy.get(".filter-option").get('[for="MySQL"]').click();

      cy.get(".card").should("have.length", 0);
    });
    it("Verify that Python with Excel does not display any company", () => {
      cy.get(".filter-option").get('[for="Python"]').click();
      cy.get(".filter-option").get('[for="Excel"]').click();

      cy.get(".card").should("have.length", 0);
    });
    it("Verify that Power BI with Tableau does not display any company", () => {
      cy.get(".filter-option").get('[for="Tableau"]').click();
      cy.get(".filter-option").get('[for="Power BI"]').click();

      cy.get(".card").should("have.length", 0);
    });
    it("Verify that Power BI with Qlik does not display any company", () => {
      cy.get(".filter-option").get('[for="Qlik"]').click();
      cy.get(".filter-option").get('[for="Power BI"]').click();

      cy.get(".card").should("have.length", 0);
    });
  });
  describe("Verify that selecting combinations of technologies display right companies number -testing with OR logic for backend-", () => {
    beforeEach(() => {
      cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]')
        .eq(0)
        .click();
    });

    it("Verify that +C+ with ASP.NET Core display 2 companies", () => {
      cy.get(".filter-option").get('[for="ASP .NET Core"]').click();
      cy.get(".filter-option").get('[for="C++"]').click();
      cy.get(".card").should("have.length", 2);
    });
    it("Verify that C++ with Django with Flask display 5 companies", () => {
      cy.get(".filter-option").get('[for="Flask"]').click();
      cy.get(".filter-option").get('[for="C++"]').click();
      cy.get(".filter-option").get('[for="Django"]').click();
      cy.get(".card").should("have.length", 5);
    });
    it("Verify that Node.js with Laravel display 10 companies", () => {
      cy.get(".filter-option").get('[for="Node.js"]').click();
      cy.get(".filter-option").get('[for="Laravel"]').click();
      cy.get(".card").should("have.length", 10);
    });
    it("Verify that Node.js with Laravel with Ruby on Rails display 10 companies", () => {
      cy.get(".filter-option").get('[for="Node.js"]').click();
      cy.get(".filter-option").get('[for="Ruby on Rails"]').click();
      cy.get(".filter-option").get('[for="Laravel"]').click();

      cy.get(".card").should("have.length", 10);
    });
    it("Verify that C++ with NestJS display 2 companies", () => {
      cy.get(".filter-option").get('[for="C++"]').click();
      cy.get(".filter-option").get('[for="NestJS"]').click();

      cy.get(".card").should("have.length", 2);
    });
    it("Verify that C++ with NestJS display 2 companies", () => {
      cy.get(".filter-option").get('[for="Spring Boot"]').click();
      cy.get(".filter-option").get('[for="C++"]').click();
      cy.get(".filter-option").get('[for="NestJS"]').click();

      cy.get(".card").should("have.length", 2);
    });
  });
  describe("Verify that selecting combinations of same technologies display right companies number -testing with OR logic for ML-DL-", () => {
    beforeEach(() => {
      cy.get('svg.MuiSvgIcon-root[data-testid="KeyboardArrowDownIcon"]')
        .eq(5)
        .click();
    });

    it("Verify that TensorFlow with PyTorch does not display any company", () => {
      cy.get(".filter-option").get('[for="TensorFlow"]').click();
      cy.get(".filter-option").get('[for="PyTorch"]').click();

      cy.get(".card").should("have.length", 0);
    });
    it("Verify that Scikit-learn with PyTorch does not display any company", () => {
      cy.get(".filter-option").get('[for="Scikit-learn"]').click();
      cy.get(".filter-option").get('[for="PyTorch"]').click();

      cy.get(".card").should("have.length", 0);
    });
    it("Verify that LangChain with MxNet does not display any company", () => {
      cy.get(".filter-option").get('[for="LangChain"]').click();
      cy.get(".filter-option").get('[for="MxNet"]').click();
      cy.get(".card").should("have.length", 0);
    });
  });
});
