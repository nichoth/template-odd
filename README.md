# template ODD ![tests](https://github.com/nichoth/template-odd/actions/workflows/nodejs.yml/badge.svg)

An example of [ODD](https://github.com/oddsdk/ts-odd) with tests in both node and a browser environment.

* lint with [standardx](https://github.com/standard/standardx)
* test in node with [node-components](https://github.com/ssc-hermes/node-components)
* test in browser with [tape-run](https://github.com/juliangruber/tape-run)
* ignore compiled code in git, but publish to npm (see [.npmignore](.npmignore))
* automatically build before publishing. See `prepublishOnly` npm hook.
* automatically publish to npm on any version change via `postpublish` npm hook.
* use Github's CI to run tests on any push event

## use
Use Github's "template" button in the GUI, then `npm init`, and change the URL for the test svg file, and edit this README file.

## test

### run all tests
```
npm test
```

### test in a browser
```
npm run build && npm run test:browser
```
This will use [tape-run](https://github.com/juliangruber/tape-run) to run tests in a browser environment, but stream output to stdout.

In [test/index.browser.ts](test/index.browser.ts), you can see an example of listening for a 'publish' event on wnfs:

```js
await wnfs.publish()
const published = await once(program, 'fileSystem:publish')
t.ok(published, 'should emit a publish event')
```

### test in node
```
npm run build && npm run test:node
```
This uses [node-components](https://github.com/ssc-hermes/node-components) to create an instance of `odd` that will run in node.

## CI
This includes an example of Github's CI service. It will run tests on any push event.
