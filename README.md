# Jest#12493

## Instructions

1) `yarn`

2) `node index.js` -> log output is `{ default: [ { foo: 'bar' } ] }`

3) `yarn jest ./index.test.js` -> test fails, output is `{ default: {} }`

4) Downgrade Jest to v24.9.0

5) `yarn jest ./index.test.js` -> test passes, output is `{ default: [ { foo: 'bar' } ] }`
