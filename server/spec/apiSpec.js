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

async function updateSpaces(id) {
  try {
    const response = await axios.patch(
      `http://localhost:3000/api/spaces/1/update?name=updatedname&description=firstspace&price=1`
    )
    return response
  } catch (error) {
    console.error(error)
  }
}

describe('API', () => {
  it('returns names, description and price of space', async () => {
    const result = await getSpaces()
    expect(result.data[0].name).toEqual('spaceOne')
    expect(result.data[0].description).toEqual('firstSpace')
    expect(result.data[0].price).toEqual(123)
  })

  it('updates space', async () => {
    const result = await updateSpaces(2)
    console.log(result)
    expect(result.data[1].name).toEqual('updatedname')
    expect(result.data[0]).toEqual(1)
  })
})
