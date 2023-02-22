Vite + Storybook Starter

This setup includes:
* [Learna](https://lerna.js.org/)
* [vite](https://vitejs.dev/)
* [eslint](https://eslint.org/), [typescript-eslint](https://typescript-eslint.io/), [eslint-airbnb-config](https://github.com/airbnb/javascript), [prettier](https://prettier.io/)
* [vitest](https://vitest.dev/), [jsdom](https://github.com/jsdom/jsdom), [@testing-library](https://testing-library.com/)
* [react-router v6](https://reactrouter.com/en/main)
* [storybook](https://storybook.js.org/)

## Folder Structure
```
├── node_modules
├── dist
├── src
│   ├─ assets
│   │   ├── css
│   │   └── images
│   ├─ components
│   │   ├── component-1
│   │   │    ├── component-1.css
│   │   │    ├── component-1.stories.tsx
│   │   │    ├── component-1.test.tsx
│   │   │    └── component-1.tsx
│   │   ├── ...
│   │   └── component-n
│   │        ├── component-n.css
│   │        ├── component-n.stories.tsx
│   │        ├── component-n.test.tsx
│   │        └── component-n.tsx
│   ├─ pages
│   ├─ stories
│   └─ tests
├── ...
├── README.md
├── package.json 
└── .gitignore
```

The project is organized into the following packages:

* `src/assets` - images and css files - common across components
* `src/components` - collection of components defined in this library
  * `src/component-1` - folder for a single component - keep all relevant files in one place
  * `src/component-1/*.stories.tsx` - collection of stories (i.e. different states) for the component
  * `src/component-1/*.test.tsx` - unit tests for the component
* `src/pages` - sample pages that you can load in the vite development server
* `src/tests` - integration tests where multiple components used on a page

## Writing Stories
Official guide: [https://storybook.js.org/docs/react/writing-stories/introduction](https://storybook.js.org/docs/react/writing-stories/introduction)

* A story captures the rendered state of a UI component.
* A component’s stories are defined in a story file (`*.stories.tsx`) that lives alongside the component file. The story file is for development-only, and it won't be included in your production bundle.
* Key ingredients are the [default export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#Using_the_default_export) that describes the component, and [named exports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#Using_named_exports) that describe the stories.
* Recommended to use UpperCamelCase for your story exports

## Writing Test

Offical guide: 
* Vitest: [https://vitest.dev/](https://vitest.dev/)
* Examples: [https://github.com/vitest-dev/vitest/tree/main/examples/react-storybook](https://github.com/vitest-dev/vitest/tree/main/examples/react-storybook)

Loading tests:
* The configuration loads tests from files named (`*.test.tsx`).
* Sample tests are included for the `<Button>` component (`/src/components/Button/Button.test.tsx`).

IDE Integration:
* Visutal Studio Code Vitest Explorer: https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer


## Commands

Run these commands from the root folder of the repository:

* `npm install` to install required packages
* `npm run build-storybook` to run the storybook
* `npm run storybook` to run the storybook
* `npm run build` to build the project 
* `npm run test` to run all tests  
* `npm run dev` to run the vite developmenet server  

References:
* https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/
* https://testing-library.com/docs/queries/about#priority
* https://kentcdodds.com/blog/common-mistakes-with-react-testing-library