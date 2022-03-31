# Boilerplate Express - Typescript

- [Boilerplate Express - Typescript](#boilerplate-express---typescript)
  - [Description](#description)
  - [Requirements](#requirements)
  - [Usage](#usage)
  - [Features](#features)

## Description

Small boilerplate to get started with a new Express app.
In order to test the API I exported functions for dependency injection. That way you can easily swap the database.

## Requirements

You need to have [Node](https://nodejs.org/) and the [Node Package Manager](https://www.npmjs.com/package/npm) (npm) installed to get all packages. Also my configuration does make use of MongoDB as database.
For live-testing the routes I created the [http-Folder](./http/), so I think it might be best to install REST-Client as Plugin in your IDE or outsource that to a tool like [Postman](https://www.postman.com/)

## Usage

Just clone the repo and hit "npm i" in your terminal while being in the root folder. You then can run the various scripts for development, building or testing.
Please note that I outsourced my environment variables to a ts-file.

**env.ts**

```js
export default {
  BASE_URL: process.env.BASE_URL || "http://localhost:3099/",
  ...
}
```

## Features

-   Express
-   Mongoose
-   Typescript
-   Supertest with Jest
-   JWT
-   BCrypt
-   Cors
