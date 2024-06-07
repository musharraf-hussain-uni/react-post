describe('test post like', () => {
  it('like button', () => {
    cy.visit('http://localhost:3000/react-post')

    //for like
    cy.get('.like-button').eq(0).click()
    cy.get('.like-button').eq(1).click()

    //for unclick like button
    cy.get('.like-button').eq(0).click()
    cy.get('.like-button').eq(1).click()
  })
})