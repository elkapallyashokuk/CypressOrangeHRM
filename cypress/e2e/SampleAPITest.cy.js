describe('Sample API Test', () => {
  it('should return a list of users', () => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.lengthOf(10) // Assuming the API always returns 10 users
    })
  })

  it('should create a new user', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/users',
      body: {
        name: 'Ashok Elkapally',
        username: 'AshokElkapally',
        email: 'ashokelkapally@gmail.com',
      },
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.name).to.eq('Ashok Elkapally')
      expect(response.body.username).to.eq('AshokElkapally')
      expect(response.body.email).to.eq('ashokelkapally@gmail.com')
    })
  })

  it('should update an existing user', () => {
    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/users/1',
      body: {
        name: 'Ashok Elkapally test.',
        username: 'AshokElkapallytest',
        email: 'ashokelkapallytest@gmail.com',
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.name).to.eq('Ashok Elkapally test.')
      expect(response.body.username).to.eq('AshokElkapallytest')
      expect(response.body.email).to.eq('ashokelkapallytest@gmail.com')
    })
  })

  it('should delete an existing user', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/users/1',
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
