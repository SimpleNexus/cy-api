describe('Filters', () => {
    it('filter log', () => {
        cy.api(
            {
                url: '/logs'
            },
            'hello world'
        )

        // All logs are here and filter checked
        cy.get('#check-console').should('be.checked')
        cy.get('#check-debug').should('be.checked')
        cy.get('#check-util-debuglog').should('be.checked')
        cy.get('#check-console-log').should('be.checked')
        cy.get('#check-debug-info').should('be.checked')
        cy.get('#check-debug-verbose').should('be.checked')
        cy.get('#check-util-debuglog-HELLO').should('be.checked')

        // specific debug logs
        cy.get('.debug-verbose').should('be.visible')
        cy.get('#check-debug-verbose').uncheck()
        cy.get('.debug-verbose').should('not.be.visible')
        cy.get('#check-debug-verbose').check()
        cy.get('.debug-verbose').should('be.visible')

        // all debug logs
        cy.get('.debug').should('be.visible')
        cy.get('#check-debug').uncheck()
        cy.get('.debug').should('not.be.visible')
        cy.get('#check-debug').check()
        cy.get('.debug').should('be.visible')

    })
})