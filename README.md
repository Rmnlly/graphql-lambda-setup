# Graphql Lambda Setup

[![Netlify Status](https://api.netlify.com/api/v1/badges/af77e879-3837-4e4f-ad90-73721a0abeb0/deploy-status)](https://app.netlify.com/sites/graphql-lambda-setup/deploys)

This repo exists to show a basic setup for a graphql lambda running on netlify.

##### Included in this setup

- A barebones webpack build which bundles the graphql dependencies and enables the use of the import syntax (this was done just for proof of concept for bundling).
- A way to test your graphql lambda locally
- A way to deploy it to netlify and have it be accessble by anyone (fixing a cors issue)

### Installation

(Some prerequisites of this walkthrough/repo are having a netlify account and [netlify cli](https://docs.netlify.com/cli/get-started/#installation) installed)

Clone this repo

```sh
$ cd graphql-lambda-setup
$ npm install
```

You can now alter the `schema.js`, `resolvers.js` and `/datasources` under the `functions/graphql` folder.

Any javascript file that lives at the root of the "functions" folder will be exposed as a lambda when you deploy your project to netlify. For this project webpack bundles our graphql and puts a graphql.js file at the root of the `/functions` folder exposing it as an api endpint.

### Testing Locally

At the root of the project

`npm run build`
`npm run dev`

Your graphql function should be available on `http://localhost:34567/.netlify/functions/graphql` when testing this way, you will see graphiql

What this is really doing is bundling the graphql code with webpack and then invoking `netlify dev` which creates an environment thats as close to the netlify (AWS) lambda environment as possible, but with some pit falls.
[Netlify Dev Docs](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md)

### Deploying

Depending on how you want to deploy it will consist of a few steps.

`netlify login`

Then you will initialize your repo as a netlify site (Note: you want to select Create & configure a new site)

`netlify init`

you will be walked through a project initialization, follow it. Then if you hooked up a github repo you will have a deploy hook that deploys your site each time you push a commit. Alternatively you can delpoy previews with:

`netlify deploy`

This will run the "[build]" step in our netlify.toml and deploy to a hashed testing site.
To deploy to production manually you can do:

`netlify deploy -p`

However when deploying this way you'll need to npm install in the functions folder first as it will zip up your depenedancies along with your code.

### Closing

You can remove the webpack from this project, its not really needed and adds awkward complexity, I just added it as a proof of concept to show that with netlify functions we can have a decent build step. There also wasn't any straightforward documentation on graphql lambda's in netlify so here you go, have fun! 🚀
