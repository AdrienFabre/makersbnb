
const spaces = require('../../controllers').spaces;

describe('Spaces', function() {
  it('returns a list of spaces', function() {
  
      expect(spaces.list).toEqual(1)
    
  });
});
