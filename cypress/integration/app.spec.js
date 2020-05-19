describe('Testing app', () => {
    let numberConditions = 0;
    beforeEach(() => {
        cy.visit('/')
    })

    // We check if the Backend is up and running
    it('Backend is up and running', () => {
        cy.request('GET', 'http://localhost:9000/conditions')
            .then((resp) => {
                // Server is up
                expect(resp.status).to.eq(200)
                // The request return an array
                expect(resp.body.conditions).to.be.a('array')
                numberConditions = resp.body.conditions.length;
            })
    })

    it('Conditions list is loaded', () => {
        cy.get('img').should('exist');
        // img is never null, even when is empty in the backend
        cy.get('img').should('have.length', numberConditions)
        // The card´s parts exists
        cy.get('h2').should('exist');
        cy.get('.snippet').should('exist');
        cy.get('.showMore').should('exist');
        cy.get('.showMore').first().click();
        // The snippet will be open after click the show More buttons
        cy.get('.snippet.open').should('exist');

    })
})