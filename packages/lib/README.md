# MyApp libraries

Includes your core library that the components depend on. This library should not depend on any other code in your app, and shouldn't have any startup code. This builds the 1st layer, and anything you put here will be available in all your modules. This is usually used as a library of common dependencies, and is ideal for defining an interface which your modules can use to communicate with each other.

Defines the main namespace: `MyApp = {};` and `api.export('MyApp')` in `package.js` which the app and modules will have access to.

Defines all packages the app depends on: `var packages = ['pkg:1','pkg:2',...]` and `api.use(packages);

This also makes their namespaces available everywhere.
