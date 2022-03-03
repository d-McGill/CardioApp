
  describe('Login Page tests', () => {

    it('Login error not visable', () => {
      cy.visit('/login')
      cy.get('.errorInfo').should('not.exist')
    })

    it('Login Button error', () => {
      cy.visit('/login')
      cy.get('#loginButton').click()
      cy.get('.errorInfo').should('be.visible')
    })

    it('Forget password link', () => {
        cy.visit('/login')
        cy.get('.forgetPassword').click()
        cy.url().should('be.equal', `${Cypress.config("baseUrl")}reset`)
        cy.contains('h1', 'Reset Password')
      })


  })
  