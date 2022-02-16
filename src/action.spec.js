const action = require('./index');

describe('my action', () => {
    it('returns a function', () => {
        expect(action).toBeInstanceOf(Function);
    });
});