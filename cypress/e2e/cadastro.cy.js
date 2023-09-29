describe('Cadastro', () => {
    // it = caso de  teste
    it('Usuario deve se tornar um Entregador', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var delivery = {
            name: 'Elton Gabriel',
            cpf: ' 11122233344',
            email: 'elton@hotmail.com',
            whatsapp: '11999999999',
            endereco: {
                cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '1000',
                complemento: 'Ap 142',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            }
        }
        cy.get('input[name="name"]').type(delivery.name)
        cy.get('input[name="cpf"]').type(delivery.cpf)
        cy.get('input[name="email"]').type(delivery.email)
        cy.get('input[name="whatsapp"]').type(delivery.whatsapp)


        cy.get('input[name="postalcode"]').type(delivery.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(delivery.endereco.numero)
        cy.get('input[name="address-details"]').type(delivery.endereco.complemento)

        cy.get('input[name="address"]').should('have.value', delivery.endereco.rua)
        cy.get('input[name="district"]').should('have.value', delivery.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', delivery.endereco.cidade_uf)
    });

});