it('Should show success message after submit', function() {
	cy.visit('the-internet.herokuapp.com/forgot_password')
	cy.get('#email').type('hellohello@fakeemail.com')
	cy.get('.icon-2x').click()
	cy.get('#content').should('have.text', "\n        Your e-mail\'s been sent!\n\n      ")
	cy.url().should('eq', 'http://the-internet.herokuapp.com/email_sent')
	cy.location('pathname').should('eq', "/email_sent")
})
