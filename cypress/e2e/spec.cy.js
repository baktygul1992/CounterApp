
// cypress/integration/counter_spec.js

describe('Counter Feature Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should increment the counter', () => {
    // Verify the initial counter value
    cy.get('[data-testid="counter-value"]').should(($h2) => {
            expect($h2.text().trim()).to.equal('10');
          });

    cy.get('[data-testid="increment-btn"]').click();

    cy.get('[data-testid="counter-value"]').should(($h2) => {
      expect($h2.text().trim()).to.equal('11');
    });
  });

  it('should decrement the counter', () => {
    // Verify the initial counter value
    cy.get('[data-testid="counter-value"]').should(($h2) => {
      expect($h2.text().trim()).to.equal('10');
    });

    // Click the decrement button
    cy.get('[data-testid="decrement-btn"]').click();

    // Verify that the counter value decreases by 10
    cy.get('[data-testid="counter-value"]').should(($h2) => {
      expect($h2.text().trim()).to.equal('9');
    });
  });

  it('should interact with increment and decrement buttons', () => {
    // Verify the initial counter value
    cy.get('[data-testid="counter-value"]').should(($h2) => {
      expect($h2.text().trim()).to.equal('10');
    });

    // Click the increment button twice
    cy.get('[data-testid="increment-btn"]').click().click();

    // Click the decrement button once
    cy.get('[data-testid="decrement-btn"]').click();

    // Verify that the counter value is 1 (2 increments - 1 decrement)
    cy.get('[data-testid="counter-value"]').should(($h2) => {
      expect($h2.text().trim()).to.equal('11');
    });
  });
});
