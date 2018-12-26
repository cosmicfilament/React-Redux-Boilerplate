# React-Redux-Boilerplate

## Setup

npm install

There are 2 index_xxx.js files under src. One is for a react application and the other is for a react-redux application. Pick which one you want to use and rename it to index.js.

All the necessary modules for either application type should be in the package.json file.

## Sources

I have borrowed techniques and ideas from a few articles that I have read which have helped me a lot, and which are listed below.

[Getting Started with Redux by David Abramov](https://egghead.io/courses/getting-started-with-redux)

[How to build your own React boilerplate with webpack 4 & Babel 7 by Seth Alexander](https://medium.com/@sethalexander/how-to-build-your-own-react-boilerplate-1a97d09337fd)

**Note:** I started out using his config file as a template but have made many modifications to it since.

My main contributions are adding hot module replacement and live loading. In addition I have added rules for fonts and images in webpack. The production configuration is pretty bare as webpack's defaults seem to be pretty good. The webpack config is broken down into separate modules which is a technique that I kind of like and learned from an inexpensive kindle book: "SurviveJS Webpack From Apprentice to Master" by Juo Vepsäläinen.

[Redux Step by Step: A simple and Robust Workflow for Real Life Apps by Tal Kol](https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092).
The diagram below is from Tal's hackernoon article. I have included the diagram because it is very helpful to have it available for someone(me) who is new to redux.

I have also liberally copied his directory structure for my use and it is represented in this boilerplate. As time goes along, I might modify it as I gain more experience, but for now I will keep it as it is.

<hr />

<img src="https://cdn-images-1.medium.com/max/1000/1*9kbmrgH8voxp_rx25LPqIw.png"
alt="react-redux-flow" />

<hr />

## Rules and principles associated with React and Redux

### The three Principles of Redux taken from their very own website

#### Single Source of Truth

The state of you whole application is stored in an object tree within a single store.

#### State is read-only

The only way to change state is to emit an **action**, an object describing what happened.

#### Changes are made with pure functions.

To specify how the state tree is transformed by actions, you write pure reducers (pure functions).

### React-Redux rules and suggestions gathered from the cosmic filament. <sup><span style="font-size:0.6em">(1)</span></sup>

This one is mine: A component should do no evil. Bwahahahahha ;0}

A component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.

Use Redux for state that matters globally or is mutated in complex ways... **The rule of thumb is do whatever is less awkward.** <sup><span style="font-size:0.6em">(2)</span></sup>

If you are going to use Redux, embrace the single state tree. Put UI state there as well, unless it becomes awkward. <sup><span style="font-size:0.6em">(2)</span></sup>

Minimize view logic in smart components by extracting it into dumb components. <sup><span style="font-size:0.6em">(3)</span></sup>

Place all business logic inside action handlers (thunks), selectors and reducers.<sup><span style="font-size:0.6em">(3)</span></sup>

Application state is the domain of Redux and UI state is the domain of React.<sup><span style="font-size:0.6em">(3)</span></sup>

<hr />
<small>Footnotes:

<span style="font-size:0.6em">1. Some of these are taken from a Udacity course on React and redux that I took. Some are probably from react and redux documentation. I will footnote the ones that I am sure come from a specific individual.</span>

<span style="font-size:0.6em">2. Dan Abramov</span>

<span style="font-size:0.6em">3. Tal Kol</span></small>
