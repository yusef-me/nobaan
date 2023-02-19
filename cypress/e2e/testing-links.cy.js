describe('testing links', () => {
    it('click all links', () => {
        const pages = ['Products', 'Users', 'Login / Signup']
        cy.visit('http://localhost:3000')

        pages.forEach(page => {
            cy
                .contains(page)
                .then((link) => {
                    cy.request(link.prop('href'))
                })
        })
    })
})