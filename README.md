# Node.JS ![stack](https://skillicons.dev/icons?i=nodejs) / TypeScript ![stack](https://skillicons.dev/icons?i=ts) Template

This is a base project that i use to develop TypeScript and NodeJS backend applications following the principles of clean architecture. It provides a pre-established folder structure and basic models, including a CRUD functionality for users. This serves as a starting point for building custom applications while also promoting consistency and organization throughout the development process.

## 🗃️ Stack

---

[Node.Js](https://nodejs.org/en/) - [TypeScript](https://www.typescriptlang.org/) - [NPX](https://github.com/npm/npx#readme) - [Nodemon](https://nodemon.io/) - [Fastify](https://www.fastify.io/) - [Prisma](https://www.prisma.io/) - [Zod](https://github.com/colinhacks/zod) - [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) - [Vitest](https://vitest.dev/) - [Tsup](https://github.com/egoist/tsup)

## 📝 Quickstart

---

<br>

1. Clone this repository

```
git clone <url> <project_name>
```

Before you run the application, you need to set your environment variables in the .env.example file. Follow the instructions provided in the commented lines, save the file, and remove the .example extension from the file name to create an .env file.

First, you need to set up your environment variables, the next step is to configure the database that the application will use. In the `./src/infrastructure/database/prisma/schema.prisma` file, define the provider of the datasource.

If you're unsure of how to complete this step, refer to the Prisma [documentation](https://www.prisma.io/docs/concepts) for guidance.

2. Once you have properly set your environment variables, you can install dependencies using the following command:

```
npm install
```

3. Then, you'll need to create the tables by running the migration using the following command:

```
npm run migrate:init
```

4. Now you're ready to go! 🚀 You just need to:

```
npm run dev
```

5. After that, you can be build your application for production. Just run:

```
npm run build
```

and now you have your release code at `./build` folder. 😀

---

> Made by [avinho](<[GitHub](https://github.com/avinho)>)
