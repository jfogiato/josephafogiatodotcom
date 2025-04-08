import { pages } from "../../src/data/pages";

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the site title", () => {
    cy.contains("Joseph A. Fogiato").should("be.visible");
  });

  it("should navigate to the About page when clicking the name", () => {
    cy.get("h1").click();
    cy.url().should("include", "/whoami");
  });

  it("should have a working bug report button", () => {
    cy.get('[title="Report a Bug / Request a Feature"]').should("be.visible");
  });

  it("navigates to each linked page via clicking", () => {
    pages.forEach((page) => {
      cy.visit("/");

      cy.get("#home-page-links").find(`a[href="${page.href}"]`).click();

      cy.url().should("include", page.href);
    });
  });

  it("has valid and accessible external links", () => {
    cy.get("#footer-links a").each(($link) => {
      const href = $link.prop("href");

      expect(href).to.match(/^(https?:\/\/|mailto:)/);

      cy.wrap($link)
        .should("have.attr", "target", "_blank")
        .and("have.attr", "rel")
        .and("include", "noopener")
        .and("include", "noreferrer");

      if (!href.startsWith("mailto:")) {
        cy.request(href).its("status").should("be.within", 200, 399);
      }
    });
  });
});
