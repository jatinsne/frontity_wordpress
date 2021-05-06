# blog

This project was bootstrapped with [Frontity](https://frontity.org/).

### Launch a development server

```
npx frontity dev
```
### Build Production Mode

```
npx frontity build
```

Builds the app for production to the `build` folder.

Your app is ready to be deployed.

> Get more info about [Frontity's architecture](https://docs.frontity.org/architecture)

### Deploy

With the files generated in the _build_ you can deploy your project

#### As a node app

Use `npx frontity serve` to run it like a normal Node app.

This command generates (and runs) a small web server that uses the generated `server.js` and `/static` to serve your content

#### As a serverless service

Upload your `static` folder to a CDN and your `server.js` file to a serverless service, like Now or Netlify.