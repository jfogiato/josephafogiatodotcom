describe("Bug Button", () => {
  const pages = ["/", "/france", "/software"];
  const expectedHref = "https://github.com/jfogiato/josephafogiatodotcom/issues/new"; 

  pages.forEach((page) => {
    it(`should show and link correctly on ${page}`, () => {
      cy.visit(page);
      cy.get("#bug-report-button")
        .should("be.visible")
        .and("have.attr", "href", expectedHref)
        .and("have.attr", "target", "_blank")
        .and("have.attr", "rel").and("include", "noopener").and("include", "noreferrer");
    });
  });
});
