describe('toggle btn', () => {
    it('theme', () => {
        cy.visit('http://localhost:3000/react-post');
        cy.get('.theme-button').click()
    })
})