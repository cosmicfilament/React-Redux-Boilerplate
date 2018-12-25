# React-Redux-Boilerplate

## Setup

npm install

There are 2 index_xxx.js files under src. One is for a react application and the other is for a react-redux application. Pick which one you want to use and rename it to index.js.

All the necessary modules for either application type should be in the package.json file.

This is a work in progress. Hot module replacement and live loading is working in the development configuration of webpack. I have yet to include a production configuration, though.

## Background

I have borrowed techniques and ideas from a few articles that I have read and that have helped me a lot, and which are listed below:


[How to build your own React boilerplate with webpack 4 & Babel 7 by Seth Alexander](https://medium.com/@sethalexander/how-to-build-your-own-react-boilerplate-1a97d09337fd)

**Note:** I started with this as a template but have made extensive modifications and added HMR, live loading and support for files and images in webpack. More to come.

[Getting Started with Redux by David Abramov](https://egghead.io/courses/getting-started-with-redux)

[Redux Step by Step: A simple and Robust Workflow for Real Life Apps by Tal Kol](https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092).
The diagram below, which is very helpful is from Tal's hackernoon article as well as the directory structure that I am using in this boilerplate:

<hr />

<img src="https://cdn-images-1.medium.com/max/1000/1*9kbmrgH8voxp_rx25LPqIw.png"
alt="react-redux-flow" />

**Rule: Smart components are not allowed to have any logic except dispatching actions.**

**Rule: Services must be completely stateless.**

**Rule: Smart components should always access state through selectors.**
