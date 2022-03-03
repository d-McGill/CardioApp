// https://docs.cypress.io/api/introduction/api.html

describe('All User Pages Render with correct content and URL', () => {
  it('Visits home page', () => {
    cy.visit('/')
    cy.contains('h1', 'Cardio App')
    cy.url().should('be.equal', `http://localhost:8080/`)
  })

  it('Visits login page', () => {
    cy.visit('/login')
    cy.contains('h1', 'Login')
    cy.url().should('be.equal', `http://localhost:8080/login`)
  })

  it('Visits register page', () => {
    cy.visit('/register')
    cy.contains('h1', 'Register for an account')
    cy.url().should('be.equal', `http://localhost:8080/register`)
  })
  
  it('Visits profile page', () => {
    cy.visit('/profile')
    cy.url().should('be.equal', `http://localhost:8080/profile`)
  })

  it('Visits dashboard page', () => {
    cy.visit('/dashboard')
    cy.url().should('be.equal', `http://localhost:8080/dashboard`)
  })

  it('Visits Learn page', () => {
    cy.visit('/search')
    cy.contains('h1', 'I want to learn about')
    cy.url().should('be.equal', `http://localhost:8080/search`) 
  })

  it('Visits help page', () => {
    cy.visit('/help')
    cy.url().should('be.equal', `http://localhost:8080/help`)
  })

  it('Visits 404 page', () => {
    cy.visit('/nopage')
    cy.contains('h1', 'Sorry this page does not exist')
    
  })

  })



 