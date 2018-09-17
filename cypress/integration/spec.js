describe('page', () => {
  it('works', () => {
    cy
     .request(`/httpgallery/authentication/authenticatedimage/default.aspx?${Math.random()}`)
     .its('headers')
     .its('content-type')
     .should('include', 'image/gif')
  })
})
