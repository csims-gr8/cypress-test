it('adds element for each click', function() {
	cy.visit('http://the-internet.herokuapp.com/add_remove_elements/')

	for (var index = 0; index < 5; index++) {
		console.log(index)
		cy.get('[onclick="addElement()"]').click()
	}

	cy.get('#elements > ').its('length').should('eq', 5)
})
