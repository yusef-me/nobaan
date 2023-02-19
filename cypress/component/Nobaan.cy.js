import Layout from "../../src/layout/Layout";

describe('Nobaan.cy.js', () => {
    it('test for navigations', () => {
        cy.mount(<Layout/>)
        const pages = ['blog', 'about', 'contact']
        cy.visit('/')
    })
})