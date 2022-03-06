
  describe('Register Page tests', () => {

    it('Register error not visable', () => {
      cy.visit('/register')
      cy.get('.errorInfo').should('not.exist')
    })

    it('Register button error', () => {
      cy.visit('/register')
      cy.get('.demo-ruleForm').scrollIntoView()
      cy.get('.registerButton').click('top')
      cy.get('.errorInfo').should('be.visible')
    })

  })
  