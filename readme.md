# React-Redux-Framework

## Setup

npm install
There are 2 index.js files pick which one you want to use and rename it to index.js.

## Background

I have borrowed techniques and ideas from a few articles that I have read and that have helped me a lot, and which are listed below:


[How to build your own React boilerplate with webpack 4 & Babel 7 by Seth Alexander](https://medium.com/@sethalexander/how-to-build-your-own-react-boilerplate-1a97d09337fd)

[Getting Started with Redux by David Abramov](https://egghead.io/courses/getting-started-with-redux)

[Redux Step by Step: A simple and Robust Workflow for Real Life Apps by Tal Kol](https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092).
The diagrams below are from Tal's hackernoon article as well as the directory structure that I am using in this boilerplate:

<hr />

<img src="https://cdn-images-1.medium.com/max/1000/1*9kbmrgH8voxp_rx25LPqIw.png"
alt="react-redux-flow" />

**Rule: Smart components are not allowed to have any logic except dispatching actions.**

**Rule: Services must be completely stateless.**

**Rule: Smart components should always access state through selectors.**