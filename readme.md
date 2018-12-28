# React-Redux-Boilerplate

## Description

Boilerplate for a react and/or redux application without having to use the create-react-app. This boilerplate is obviously not as robust as the facebook scripts, but it does let you get a better feel for what is going on under the hood and is easily extensible. I have also included and will be adding information that I have gleaned from my coursework and readings that I find useful and that I want to be able to refer to in the future, so why not add it to the readme.
## Setup

Clone the boilerplate project into the directory that you want you use as your new project like this:<br />
git clone https://github.com/cosmicfilament/React-Redux-Boilerplate.git \< your directory name >

Then do an npm install

There are 2 index_xxx.js files under src. One is for a react application and the other is for a react-redux application. Pick which one you want to use and rename it to index.js.

All the necessary modules for either application type should be in the package.json file as dependencies. If you are only making a react app, then you can uninstall the redux modules. The dev dependencies are pretty much for babel and webpack and should not be uninstalled unless you have a reason, to.

There is a suggested directory structure for the application but it is just there as a convenience.

I am unable to run the jest test script unless I monkey patch the jest index.js file in node_modules. It is loading babel-core instead of @babel/core. Don't really know how to get around this. So to fix this issue open node_modules/babel-jest/build/index.js and find the string: babel-core. Change it to @babel/core and you are good to go.

## Sources

I have borrowed techniques and ideas from a few articles that I have read which have helped me a lot, and which are listed below.

[Getting Started with Redux by David Abramov](https://egghead.io/courses/getting-started-with-redux)

[How to build your own React boilerplate with webpack 4 & Babel 7 by Seth Alexander](https://medium.com/@sethalexander/how-to-build-your-own-react-boilerplate-1a97d09337fd)

**Note:** I started out using Seth Alexander's config file as a template but have made many modifications to it since. The webpack config is broken down into separate modules which is a technique that I learned from an inexpensive kindle book: "SurviveJS Webpack From Apprentice to Master" by Juo Vepsäläinen.

[Redux Step by Step: A simple and Robust Workflow for Real Life Apps by Tal Kol](https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092).
The diagram below is from Tal's hackernoon article. I have included the diagram because it is very helpful to have it available for someone(me) who is new to redux.

---

<img src="https://cdn-images-1.medium.com/max/1000/1*9kbmrgH8voxp_rx25LPqIw.png"
alt="react-redux-flow" />

---

## Usefule rules, principles, suggestions and definitions.

### The three Principles of Redux taken from their very own website

#### Single Source of Truth

The state of you whole application is stored in an object tree within a single store.

#### State is read-only

The only way to change state is to emit an **action**, an object describing what happened.

#### Changes are made with pure functions.

To specify how the state tree is transformed by actions, you write pure reducers (pure functions).

### React-Redux rules and suggestions gathered from the cosmic filament. <sup><span style="font-size:0.5em">(1)</span></sup>

A component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.

Use Redux for state that matters globally or is mutated in complex ways... **The rule of thumb is do whatever is less awkward.** <sup><span style="font-size:0.6em">(2)</span></sup>

If you are going to use Redux, embrace the single state tree. Put UI state there as well, unless it becomes awkward. <sup><span style="font-size:0.6em">(2)</span></sup>

Regarding thunk middleware: The middleware will call that function with dispatch method itself as the first argument...The action will only reach the reducers once the API request is completed. It will also “swallow” such actions so don't worry about your reducers receiving weird function arguments. Your reducers will only receive plain object actions—either emitted directly, or emitted by the functions as we just described. <sup><span style="font-size:0.6em">(2)</span></sup>

Minimize view logic in smart components by extracting it into dumb components. <sup><span style="font-size:0.6em">(3)</span></sup>

Place all business logic inside action handlers (thunks), selectors and reducers.<sup><span style="font-size:0.6em">(3)</span></sup>

Application state is the domain of Redux and UI state is the domain of React.<sup><span style="font-size:0.6em">(3)</span></sup> But, see the rule of thumb above.

### Other useful bits of information

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

---

<sup><span style="font-size:0.6em">Footnotes:</span></sup>

<sup><span style="font-size:0.6em">1. Some of these tidbits are taken from a Udacity course on React and redux that I took. Some are probably from react and redux documentation. I will footnote the ones that I am sure come from a specific individual.</span></sup>

<sup><span style="font-size:0.6em">2. Dan Abramov</span></sup>

<sup><span style="font-size:0.6em">3. Tal Kol</span></sup>
