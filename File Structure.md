- public
- build
- node_modules
- src
    |_ components
        |_ MyComponentFolder
            |_ MyComponent.container.js
            |_ MyComponent.component.js // can be .jsx or .tsx
            |_ MyComponent.styles.js
            |_ MyComponent.test.js // like to bundle components
        |_ index.js // export all components from one single source.
    |_ actions
    |_ assets
        |_ images // folder
        |_ fonts // folder
    |_ context
       |_ Mycontext.js  // updated 10/22/19 with or without redux
    |_ services
    |_ utils
        |_ styles
           |_ global.js //I store all my global styles
           |_ helpers.js
        |_ tests
           |_ helpers.js // I store handy functions here
    |_ App.js
    |_ index.js
    |_ store.js
- .eslintrc
- .eslintignore
- .prettierrc