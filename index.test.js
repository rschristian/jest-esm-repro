test(`'esm' package should be able to retrieve module`, () => {
    const result = require('esm')(module)('./esm-export.js');

    console.log(result);

    expect(result.default).toEqual([{ foo: 'bar' }]);
})

