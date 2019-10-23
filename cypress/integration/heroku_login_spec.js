describe('login scenarios', function() {
	beforeEach(function() {
		cy.visit('http://the-internet.herokuapp.com/login')
		cy.get('#username').type('tomsmith')
	})

	it('Should be able to login with valid password', function() {
		cy.get('#password').type('SuperSecretPassword!')
		cy.get('.fa').click()
		cy.get('#flash').should('contain', 'You logged into a secure area!')
	})

	it('should fail with invalid password', function() {
		cy.get('#password').type('SuperSecretPassword')
		cy.get('.fa').click()
		cy.get('#flash').should('contain','invalid')
	})
})
