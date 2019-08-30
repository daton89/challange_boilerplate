const hello = require('./main')

describe('First test', () => {
  it('should return the given name', () => {
    const TONY = 'tony'
    const name = hello(TONY)
    expect(name).toBe(TONY)
  })

  it('should return the default name', () => {
    const name = hello()
    expect(name).toBe('world')
  })
})
