# Graphql Lambda Setup

[![Netlify Status](https://api.netlify.com/api/v1/badges/af77e879-3837-4e4f-ad90-73721a0abeb0/deploy-status)](https://app.netlify.com/sites/graphql-lambda-setup/deploys)

This repo exists to show a basic setup for a graphql lambda running on netlify.

##### Included in this setup

- A barebones webpack build which bundles the graphql dependencies and enables the use of the import syntax (this was done just for proof of concept for bundling).
- A way to test your graphql lambda locally
- A way to deploy it to netlify and have it be accessble by anyone (fixing a cors issue)

### Installation

Clone this repo

```sh
$ cd graphql-lambda-setup
$ npm install
```

You can now alter the `schema.js`, `resolvers.js` and `/datasources` under the `functions/graphql` folder.

Any javascript file that lives at the root of the "functions" folder will be exposed as a lambda when you deploy your project to netlify. For this project webpack bundles our graphql and puts a graphql.js file at the root of the `/functions` folder exposing it as an api endpint.

### Testing Locally

At the root of the project

`npm run dev`

What this is really doing is bundling the graphql code with webpack and then invoking `netlify dev` which creates an environment thats as close to the netlify (AWS) lambda environment as possible, but with some pit falls.
[Netlify Dev Docs](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md)
