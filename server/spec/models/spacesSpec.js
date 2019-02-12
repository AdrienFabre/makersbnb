
const spacesController = require('../../controllers').spaces;

describe('Spaces', function() {
  it('returns a list of spaces', function() {
  
    module.exports = { 
      expect(spacesController.list).toEqual(1)
    };
  }
}
