const Spaces = require('../controllers/spaces')
const axios = require('axios')

async function getSpaces() {
  try {
    const response = await axios.get('http://localhost:3000/api/spaces')
    return response
  } catch (error) {
    console.error(error)
  }
}

describe('API', () => {
  it('returns names, description and price of space', async () => {
    const result = await getSpaces()
    expect(result.data[0].name).toEqual('title')
    expect(result.data[0].description).toEqual('description')
    expect(result.data[0].price).toEqual(1)
  })
})
