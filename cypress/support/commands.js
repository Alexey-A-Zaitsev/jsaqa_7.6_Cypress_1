Cypress.Commands.add("login", (email, pass) => {
  cy.contains("Log in").click();
  if (email) {
    cy.get("#mail").type(email);
  }
  if (pass) {
    cy.get("#pass").type(pass);
  }
  cy.contains("Submit").click();
});

Cypress.Commands.add("createNewBook", (title, description, authors) => {
  cy.contains("Add new").click();
  cy.get("#title").type(title);
  cy.get("#description").type(description);
  cy.get("#authors").type(authors);
  cy.contains("Submit").click();
});

Cypress.Commands.add(
  "addNewBookToFavoritesDuringCreation",
  (title, description, authors) => {
    cy.contains("Add new").click();
    cy.get("#title").type(title);
    cy.get("#description").type(description);
    cy.get("#authors").type(authors);
    cy.get("#favorite").click();
    cy.contains("Submit").click();
  }
);

Cypress.Commands.add("addToFavorite", (title) => {
  cy.wait(3000);
  cy.xpath(`//div[./div[./div[contains(text(), "${title}")]]]`).within(() => {
    cy.contains("Add to favorite").click();
  });
});

Cypress.Commands.add("checkThatBookExistsInFavorites", (title) => {
  cy.contains("Favorites").click();
  cy.contains(`${title}`);
});

Cypress.Commands.add("deleteBookFromFavorites", (title, page) => {
  if (page == "Favorites") {
    cy.contains("Favorites").click();
    cy.xpath(`//div[./div[./div[contains(text(), "${title}")]]]`).within(() => {
      cy.contains("Delete from favorite").click();
    });
  }
  if (page == "Books list") {
    cy.contains("Books list").click();
    cy.xpath(`//div[./div[./div[contains(text(), "${title}")]]]`).within(() => {
      cy.contains("Delete from favorite").click();
    });
  }
});
