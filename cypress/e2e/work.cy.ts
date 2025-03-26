describe("Work Page", () => {
  beforeEach(() => {
    cy.visit("/work");
  });

  it("loads the page and shows name + location", () => {
    cy.contains("Joseph A. Fogiato").should("be.visible");
    cy.contains("Philadelphia, PA").should("be.visible");
  });

  it("has secure target='_blank' links", () => {
    cy.get("a[target='_blank']").each(($el) => {
      cy.wrap($el)
        .should("have.attr", "rel")
        .then((rel) => {
          expect(rel).to.include("noopener");
          expect(rel).to.include("noreferrer");
        });
    });
  });

  it("has technical and soft skills rendered", () => {
    cy.contains("Technical Skills").should("exist");
    cy.contains("Soft Skills").should("exist");
    cy.contains("React").should("exist");
    cy.contains("Doing the right thing.").should("exist");
  });

  it("has correct education info", () => {
    cy.contains("Turing School of Software & Design")
      .should("have.attr", "href")
      .and("include", "turing.edu");
    cy.contains("The University of Pittsburgh").should("exist");
  });

  it("renders at least 1 job experience", () => {
    cy.get("h3").contains("MANNA").should("exist");
  });

  it("renders all job responsibilities as list items", () => {
    cy.get("ul li").its("length").should("be.greaterThan", 5);
  });

  it("renders file links with icons if available", () => {
    cy.get("a")
      .filter("[href$='.pdf'],[href$='.docx'],[href$='.txt']")
      .each(($el) => {
        cy.wrap($el).find("svg").should("exist");
      });
  });

  it("calls window.print when Print / Save as PDF button is clicked", () => {
    cy.visit("/work");

    cy.window().then((win) => {
      cy.stub(win, "print").as("printStub");
    });

    cy.contains("Print / Save as PDF").should("be.visible").click();

    cy.get("@printStub").should("have.been.calledOnce");
  });
});
